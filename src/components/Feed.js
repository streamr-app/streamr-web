import React from 'react'

import SubscriptionStreamsContainer from '../containers/streams/SubscriptionStreamsContainer'
import TrendingStreamsContainer from '../containers/streams/TrendingStreamsContainer'

export default () => (
  <div className='feed container'>
    <h2>My Subscriptions</h2>
    <SubscriptionStreamsContainer />

    <h2>🚀 Trending Streams</h2>
    <TrendingStreamsContainer />
  </div>
)
