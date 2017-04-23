import React from 'react'

export default ({ error, audioAPIsUnavailable }) => {
  if (!error) return null

  return (
    <div className='recording-notice'>
      {audioAPIsUnavailable &&
        <p>Your browser doesn't support audio recording. Please use Google Chrome or Firefox.</p>}
    </div>
  )
}
