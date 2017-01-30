import React from 'react'

import StreamList from './StreamList'
import StreamCardContainer from '../../containers/streams/StreamCardContainer'

export default ({
  streams
}) => (
  <StreamList>
    {streams.map((stream) => (
      <StreamCardContainer streamId={stream.id} key={stream.id} />
    ))}
  </StreamList>
)
