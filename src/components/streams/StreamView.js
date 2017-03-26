import React from 'react'

import StreamPlayerContainer from '../../containers/streams/StreamPlayerContainer'

export default ({
  loading,
  stream,
  streamData
}) => {
  if (loading) return <p>Loading...</p>

  return (
    <div className='container'>
      <StreamPlayerContainer streamData={streamData} />

      <h1>{stream.title}</h1>
    </div>
  )
}
