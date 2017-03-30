import React from 'react'

import Helmet from 'react-helmet'
import StreamPlayer from '../playback/StreamPlayer'

export default ({
  loading,
  stream,
  streamData
}) => {
  if (loading) return <p>Loading...</p>

  return (
    <div className='container'>
      <Helmet title={stream.title} />

      <StreamPlayer streamData={streamData} />

      <h1>{stream.title}</h1>
    </div>
  )
}
