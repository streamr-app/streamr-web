import React from 'react'

import TrendingTopicsContainer from '../containers/topics/TrendingTopicsContainer'
import TrendingStreamsContainer from '../containers/streams/TrendingStreamsContainer'

export default () => (
  <div className='feed container'>
    <h1>🚀 Trending Topics</h1>
    <TrendingTopicsContainer />

    <h1>🕶 Trending Streams</h1>
    <TrendingStreamsContainer />
  </div>
)
