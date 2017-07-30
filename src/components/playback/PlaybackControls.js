import React from 'react'
import Measure from 'react-measure'

import FullscreenButton from './FullscreenButton'

export default ({
  playing,
  position,
  duration,
  fullscreen,

  playerRef,

  onTogglePlayPause,
  onPositionChange,
  onRequestFullscreen
}) => (
  <div className='playback-controls'>
    <div className='flip-container'>
      <a href='#' className='play-pause' onClick={(event) => { event.preventDefault(); onTogglePlayPause() }}>
        {playPauseButton(playing)}
      </a>

      <Measure>
        {(dimensions) => (
          <div className='progress' onClick={clickHandler(onPositionChange, duration, dimensions)}>
            <div className='progress-backing' />
            <div className='progress-filler' style={{ width: positionPercentage(position, duration) }} />
            <span className='current-progress'>{formatMillis(position)}</span>
            <span className='duration'>{formatMillis(duration)}</span>
          </div>
        )}
      </Measure>

      <FullscreenButton fullScreenElement={playerRef} />
    </div>
  </div>
)

function clickHandler (onPositionChange, duration, { width, left }) {
  return (event) => {
    event.preventDefault()

    const dx = event.pageX - left
    const relativeX = dx / width
    const intendedPosition = relativeX * duration

    onPositionChange(intendedPosition)
  }
}

function positionPercentage (position, duration) {
  return (position / duration * 100 || 0) + '%'
}

function playPauseButton (playing) {
  if (playing) {
    return <img src={require('../../images/pause.svg')} />
  } else {
    return <img src={require('../../images/play.svg')} />
  }
}

function formatMillis (millis = 0) {
  const minutes = Math.floor(millis / 1000 / 60)
  const seconds = Math.round(millis / 1000) % 60

  return `${padTime(minutes)}:${padTime(seconds)}`
}

function padTime (time) {
  time = time.toString()
  return ('00' + time).substring(time.length)
}
