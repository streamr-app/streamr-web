import React from 'react'

import { BinaryClient } from '../../vendor/binary'
import Recorder from 'react-recorder'

export default React.createClass({
  onStop (blob) {
    console.log(blob)
  },

  componentWillMount () {
    this.client = new BinaryClient('ws://localhost:9001')

    this.client.on('open', () => {
      this.stream = this.client.createStream({ meta: 'test' })
    })
  },

  gotStream (stream) {
    const context = new AudioContext()

    const audioInput = context.createMediaStreamSource(stream)
    const bufferSize = 2048

    const recorder = context.createScriptProcessor(bufferSize, 1, 1)
    recorder.onaudioprocess = this.recorderProcess
    audioInput.connect(recorder)
    recorder.connect(context.destination)
  },

  recorderProcess (event) {
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

  onError (error) {
    console.log(error)
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
