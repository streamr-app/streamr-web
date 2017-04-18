import React from 'react'
import cx from 'classnames'

import { BinaryClient } from '../../vendor/binary'
import Recorder from 'react-recorder'

const FFT_SIZE = 512
const NUM_FFT_BARS = 100

export default class AudioRecordingStream extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fft: new Uint8Array(FFT_SIZE)
    }
  }

  componentDidMount () {
    this.visualizerDrawLoop = requestAnimationFrame(() => this.redrawVisualizer())
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.streamId && !this.streamSetup) {
      this.client = new BinaryClient(process.env.RECORDING_SERVICE_URL)

      this.client.on('open', () => {
        this.stream = this.client.createStream({
          streamId: this.props.streamId,
          authToken: this.props.authToken,
          sampleRate: this.sampleRate
        })

        this.props.onAudioReady()
        this.setState({ recording: true })
        this.recording = true
      })

      this.streamSetup = true
    }

    if (nextProps.streamEnding) {
      this.client && this.client.close()
      cancelAnimationFrame(this.visualizerDrawLoop)
      this.setState({ fft: new Uint8Array(NUM_FFT_BARS) })
    }
  }

  componentWillUnmount () {
    this.stream && this.stream.end()
    this.client && this.client.close()
    this.audioStream.getTracks()[0].stop()
    cancelAnimationFrame(() => this.visualizerDrawLoop())
  }

  gotStream (stream) {
    this.audioStream = stream
    this.audioContext = new AudioContext()
    this.sampleRate = this.audioContext.sampleRate

    const audioInput = this.audioContext.createMediaStreamSource(stream)
    const bufferSize = 2048

    const recorder = this.audioContext.createScriptProcessor(bufferSize, 1, 1)
    recorder.onaudioprocess = (event) => {
      this.analysisProcess(event)
      this.recorderProcess(event)
    }

    this.analyzer = this.audioContext.createAnalyser()
    this.analyzer.smoothingTimeConstant = 0.1
    this.analyzer.fftSize = FFT_SIZE

    audioInput.connect(recorder)
    audioInput.connect(this.analyzer)
    recorder.connect(this.audioContext.destination)
  }

  onStop (blob) {
    console.log(blob)
  }

  recorderProcess (event) {
    if (!this.recording || this.props.streamEnding) return null

    var left = event.inputBuffer.getChannelData(0)
    this.stream.write(this.float32to16(left))
  }

  analysisProcess (event) {
    const data = new Uint8Array(NUM_FFT_BARS)
    this.analyzer.getByteFrequencyData(data)
    this.fft = data
  }

  float32to16 (buffer) {
    var l = buffer.length
    const buf = new Int16Array(l)

    while (l--) {
      buf[l] = Math.min(1, buffer[l]) * 0x7FFF
    }

    return buf.buffer
  }

  redrawVisualizer () {
    this.setState({ fft: this.fft }, () => {
      this.visualizerDrawLoop = requestAnimationFrame(() => this.redrawVisualizer())
    })
  }

  render () {
    const fft = Array.from(this.state.fft || [])

    return (
      <div className='recorder'>
        <div className={cx('visualizer', { recording: this.state.recording && !this.props.streamEnding })}>
          {fft.map((bar, i) => (
            <div className='bar' key={i} style={{ height: `${bar / 255 * 100}%` }} />
          ))}
        </div>

        <Recorder
          onStop={this.onStop}
          gotStream={(stream) => this.gotStream(stream)}
          onError={this.onError}
        />
      </div>
    )
  }
}

/* global AudioContext, Int16Array, requestAnimationFrame, cancelAnimationFrame */
