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

  componentDidMount () {
    const canvas = this.refs.canvas

    this.manager = new DrawManager(canvas, this.props.stream, this.props.colors)
    this.manager.on('POSITION_CHANGE', (position) => this.setState({ position }))
    this.manager.on('READY', () => this.forceUpdate())
    this.manager.on('PLAY', () => this.forceUpdate())
    this.manager.on('PAUSE', () => this.forceUpdate())
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
