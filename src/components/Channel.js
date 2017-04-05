import React from 'react'

import ChannelBadge from './channel/ChannelBadge'
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
  <div className='channel container'>
    { user ? (
      <div>
        <div className='top-wrapper'>
          <span className='left'>
            <ChannelBadge channel={user} hideSubscribe />
          </span>
          <span className='right'>
            <SubscribeButtonContainer userId={user.id} />
          </span>
        </div>
        <div className='bottom-wrapper'>
          <StreamList>
            {
              streams.length > 0 ? listStreamCards(streams, user) : (
                <div className='no-streams'>This channel has not posted any streams.</div>
              )
            }
          </StreamList>
        </div>
      </div>
    ) : (
      <i className='loading fa fa-spinner fa-spin' />
    ) }
  </div>
)
