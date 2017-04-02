import React from 'react'
import DrawManager from './DrawManager'
import cx from 'classnames'

import PlaybackControls from './PlaybackControls'

export default React.createClass({
  getInitialState () {
    return {
      position: 0
    }
  },

  play () {
    this.audio.play()
    this.forceUpdate()
  },

  pause () {
    this.audio.pause()
    this.forceUpdate()
  },

  positionChange (position, userInitiated) {
    if (userInitiated) {
      this.audio.currentTime = position / 1000
    }

    this.setState({ position })
  },

  componentDidMount () {
    // TODO: use real audio from stream
    this.audio = new Audio('https://s3-us-west-2.amazonaws.com/streamr-stevens-mbp/audio/93-HELLO-THIS-IS-STREAM.mp3')

    this.manager = new DrawManager(this.svg)
    this.manager.on('POSITION_CHANGE', this.positionChange)
    this.manager.on('READY', () => setTimeout(() => this.manager.play(), 500))
    this.manager.on('PLAY', () => this.play())
    this.manager.on('PAUSE', () => this.pause())

    if (this.props.streamData) {
      const { stream, streamData, colors } = this.props
      this.manager.prepare(stream, streamData, colors)
    }
  },

  componentWillReceiveProps (nextProps) {
    if (nextProps.stream && !this.props.streamData) {
      const { stream, streamData, colors } = nextProps
      setTimeout(() => this.manager.prepare(stream, streamData, colors))
    }
  },

  componentWillUnmount () {
    this.manager.stop()
    this.audio.pause()
  },

  render () {
    if (!this.manager) this.manager = {}
    const playing = this.manager.playing

    return (
      <div className={cx('stream-player', { paused: !playing })}>
        <svg viewBox='0 0 1920 1080' ref={(svg) => { this.svg = svg }} />

        <PlaybackControls
          playing={playing}
          position={this.manager.position}
          duration={this.manager.duration}
          onTogglePlayPause={() => this.manager.toggle()}
          onPositionChange={(position) => this.manager.setPosition(position)} />
      </div>
    )
  }
})

/* global Audio */
