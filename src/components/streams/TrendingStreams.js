import React from 'react'

import { StreamList } from './StreamList'
import { StreamCard } from './StreamCard'

export default ({
  streams
}) => (
  <StreamList>
    {streams.map((stream) => (
      <StreamCard stream={stream} key={stream.id} />
    ))}
  </StreamList>
)
