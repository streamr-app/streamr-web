import React from 'react'

import StreamList from './StreamList'
import StreamCardContainer from './StreamCardContainer'

export default ({
  streams
}) => (
  <StreamList>
    {streams.map((stream) => (
      <StreamCardContainer streamId={stream.id} key={stream.id} />
    ))}

    {streams.length === 0 &&
      <p className='none'>No streams found.</p>}
  </StreamList>
)
