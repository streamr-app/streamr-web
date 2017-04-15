import React from 'react'
import Helmet from 'react-helmet'

import { Banner } from '../common/banners'
import TrendingStreams from '../streams/TrendingStreams'

export default ({
  topic = {},
  streams
}) => (
  <div className='topic'>
    <Helmet title={topic.name} />

    <Banner>
      <h2>{topic.name}</h2>
    </Banner>

    <div className='container'>
      <TrendingStreams {...{ streams }} />
    </div>
  </div>
)
