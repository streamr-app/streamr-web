import React from 'react'

import { BinaryClient } from '../../vendor/binary'
import Recorder from 'react-recorder'

export default React.createClass({
  componentWillReceiveProps (nextProps) {
    if (nextProps.streamId && !this.props.streamId) {
      this.client = new BinaryClient(process.env.RECORDING_SERVICE_URL)

      this.client.on('open', () => {
        this.stream = this.client.createStream({
          streamId: this.props.streamId,
          authToken: this.props.authToken,
          sampleRate: this.sampleRate
        })
      })
    }
  },

  componentWillUnmount () {
    this.client && this.client.close()
  },

  gotStream (stream) {
    this.audioContext = new AudioContext()
    this.sampleRate = this.audioContext.sampleRate

    const audioInput = this.audioContext.createMediaStreamSource(stream)
    const bufferSize = 2048

    this.recorder = this.audioContext.createScriptProcessor(bufferSize, 1, 1)
    this.recorder.onaudioprocess = this.recorderProcess
    audioInput.connect(this.recorder)
    this.recorder.connect(this.audioContext.destination)
  },

  recorderProcess (event) {
    if (!this.stream) return null

    var left = event.inputBuffer.getChannelData(0)
    this.stream.write(this.float32to16(left))
  },

  float32to16 (buffer) {
    var l = buffer.length
    const buf = new Int16Array(l)

    while (l--) {
      buf[l] = Math.min(1, buffer[l]) * 0x7FFF
    }

    return buf.buffer
  },

  render () {
    return (
      <Recorder
        onStop={this.onStop}
        gotStream={this.gotStream}
        onError={this.onError}
      />
    )
  }
})

/* global AudioContext, Int16Array */
