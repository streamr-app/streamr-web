import React from 'react'

import { BinaryClient } from '../../vendor/binary'
import Recorder from 'react-recorder'

export default class AudioRecordingStream extends React.Component {
  componentWillMount () {
    this.client = new BinaryClient(process.env.RECORDING_SERVICE_URL)

    this.clientOpenPromise = new Promise((resolve, reject) => {
      this.client.on('open', () => {
        resolve()
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.streamId && !this.streamSetup) {
      this.clientOpenPromise.then(() => {
        this.stream = this.client.createStream({
          streamId: this.props.streamId,
          authToken: this.props.authToken,
          sampleRate: this.sampleRate
        })
      })

      this.streamSetup = true
    }
  }

  componentWillUnmount () {
    this.stream && this.stream.end()
    this.client.close()
    this.audioStream.getTracks()[0].stop()
  }

  gotStream (stream) {
    this.audioStream = stream
    this.audioContext = new AudioContext()
    this.sampleRate = this.audioContext.sampleRate

    const audioInput = this.audioContext.createMediaStreamSource(stream)
    const bufferSize = 2048

    this.recorder = this.audioContext.createScriptProcessor(bufferSize, 1, 1)
    this.recorder.onaudioprocess = (event) => this.recorderProcess(event)
    audioInput.connect(this.recorder)
    this.recorder.connect(this.audioContext.destination)
  }

  onStop (blob) {
    console.log(blob)
  }

  recorderProcess (event) {
    if (!this.stream) return null

    var left = event.inputBuffer.getChannelData(0)
    this.stream.write(this.float32to16(left))
  }

  float32to16 (buffer) {
    var l = buffer.length
    const buf = new Int16Array(l)

    while (l--) {
      buf[l] = Math.min(1, buffer[l]) * 0x7FFF
    }

    return buf.buffer
  }

  render () {
    return (
      <Recorder
        onStop={this.onStop}
        gotStream={(stream) => this.gotStream(stream)}
        onError={this.onError}
      />
    )
  }
}

/* global AudioContext, Int16Array */
