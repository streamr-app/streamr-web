import React from 'react'
import DrawManager from './DrawManager'
import cx from 'classnames'

import PlaybackControls from './PlaybackControls'

export default class StreamPlayer extends React.Component {
  getInitialState () {
    return {
      position: 0,
      loading: true
    }
  }

  play () {
    this.audio && this.audio.play()
    this.forceUpdate()
  }

  pause () {
    this.audio && this.audio.pause()
    this.forceUpdate()
  }

  positionChange (position, userInitiated) {
    if (this.audio && userInitiated) {
      this.audio.currentTime = position / 1000
    }

    this.setState({ position })
  }

  componentDidMount () {
    this.manager = new DrawManager(this.svg)
    this.manager.on('POSITION_CHANGE', (position) => this.positionChange(position))
    this.manager.on('READY', () => this.manager.play())
    this.manager.on('PLAY', () => this.play())
    this.manager.on('PAUSE', () => this.pause())

    if (this.props.streamData) {
      const { stream, streamData, colors } = this.props
      this.audio = new Audio(stream.audioDataUrl)
      this.manager.prepare(stream, streamData, colors)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.stream && !this.props.streamData) {
      const { stream, streamData, colors } = nextProps
      this.audio = new Audio(stream.audioDataUrl)
      this.manager.prepare(stream, streamData, colors)
    }
  }

  componentWillUnmount () {
    this.manager.stop()
    this.audio.pause()
  }

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
}

/* global Audio */
