import React from 'react'
import DrawManager from './DrawManager'
import cx from 'classnames'

import PlaybackControls from './PlaybackControls'

export default class StreamPlayer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
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
    if (!this.props.loading) {
      this.prepare(this.props)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.loading) {
      this.prepare(nextProps)
    }
  }

  prepare ({ stream, streamData, colors }) {
    if (this.prepared) return

    this.manager = new DrawManager(this.svg)
    this.manager.on('POSITION_CHANGE', this.positionChange.bind(this))
    this.manager.on('PLAY', () => this.play())
    this.manager.on('PAUSE', () => this.pause())
    this.managerPromise = new Promise((resolve) => {
      this.manager.on('READY', () => resolve())
    })

    this.audio = new Audio(stream.audioDataUrl)
    this.audioPromise = new Promise((resolve) => {
      this.audio.addEventListener('canplay', () => resolve())
    })

    this.enqueueAutoplay()

    this.manager.prepare(stream, streamData, colors)

    this.prepared = true
  }

  enqueueAutoplay () {
    Promise.all([ this.managerPromise, this.audioPromise ]).then(() => this.manager.play())
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
