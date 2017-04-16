import React from 'react'
import { Link } from 'react-router-dom'

export default ({
  children,
  className = '',
  stream,
  user
}) => (
  <Link to={`/${stream.slug}`} className={`stream-card ${className}`}>
    <div className='thumbnail-wrapper'>
      <img className='thumbnail' src={stream.imageUrl} />

      <p className='duration'>{formatDuration(stream.duration)}</p>
    </div>

    <div className='information-wrapper'>
      <p className='title'>{stream.title}</p>
      <p className='author'>{user.name}</p>
    </div>
  </Link>
)

function formatDuration (duration = 0) {
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60

  return `${padTime(minutes)}:${padTime(seconds)}`
}

function padTime (time) {
  time = time.toString()
  return ('00' + time).substring(time.length)
}
