import React from 'react'

import TrendingStreams from '../streams/TrendingStreams'

export default ({
  streams
}) => (
  <div className='container'>
    <TrendingStreams {...{ streams }} />
  </div>
)
