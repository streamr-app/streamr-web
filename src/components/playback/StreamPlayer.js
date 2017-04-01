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

    console.log(position)
    this.setState({ position })
  },

  componentDidMount () {
    const canvas = this.refs.canvas

    // TODO: use real audio from stream
    this.audio = new Audio('https://s3-us-west-2.amazonaws.com/streamr-stevens-mbp/audio/93-HELLO-THIS-IS-STREAM.mp3')

    this.manager = new DrawManager(canvas, this.props.stream, this.props.colors)
    this.manager.on('POSITION_CHANGE', this.positionChange)
    this.manager.on('READY', () => this.forceUpdate())
    this.manager.on('PLAY', () => this.play())
    this.manager.on('PAUSE', () => this.pause())
    this.manager.loadData(this.props.streamData)
  },

  render () {
    if (!this.manager) this.manager = {}
    const playing = this.manager.playing

    return (
      <div className={cx('stream-player', { paused: !playing })}>
        <svg viewBox='0 0 1920 1080' ref='canvas' />

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
