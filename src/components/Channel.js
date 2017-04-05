import React from 'react'

import ProfileImage from './users/ProfileImage'

import { Banner } from './common/banners'
import SubscribeButtonContainer from './users/SubscribeButtonContainer'
import StreamList from './streams/StreamList'
import StreamCard from './streams/StreamCard'

function listStreamCards (streams, channel) {
  return streams.map((stream) => (
    <StreamCard stream={stream} user={channel} key={stream.id} className='horizontal' />
  ))
}

export default ({
  user = {},
  streams = []
}) => (
  <div className='channel'>
    <Banner className='channel-overview'>
      <ProfileImage image={user.image} />
      <h2>{user.name}</h2>
      <SubscribeButtonContainer userId={user.id} />
    </Banner>

    <div className='container'>
      <StreamList>
        {
          streams.length > 0 ? listStreamCards(streams, user) : (
            <div className='no-streams'>This channel has not posted any streams.</div>
          )
        }
      </StreamList>
    </div>
  </div>
)
