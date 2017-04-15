import React from 'react'

import SubscriptionStreamsContainer from './streams/SubscriptionStreamsContainer'
import TrendingStreamsContainer from './streams/TrendingStreamsContainer'
import TrendingTopicsContainer from './topics/TrendingTopicsContainer'

export default () => (
  <div className='feed container'>
    <h2>My Subscriptions</h2>
    <SubscriptionStreamsContainer />

    <h2>🚀 Trending Streams</h2>
    <TrendingStreamsContainer />

    <h2>Explore by Topic</h2>
    <TrendingTopicsContainer />
  </div>
)
