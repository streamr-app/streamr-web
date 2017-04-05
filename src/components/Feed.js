import React from 'react'

import SubscriptionStreamsContainer from '../containers/streams/SubscriptionStreamsContainer'
import TrendingTopicsContainer from '../containers/topics/TrendingTopicsContainer'
import TrendingStreamsContainer from '../containers/streams/TrendingStreamsContainer'

export default () => (
  <div className='feed container'>
    <h2>My Subscriptions</h2>
    <SubscriptionStreamsContainer />

    <h2>Featured Topics</h2>
    <TrendingTopicsContainer />

    <h2>🚀 Trending Streams</h2>
    <TrendingStreamsContainer />
  </div>
)
