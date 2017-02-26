import React from 'react'

import ChannelBadge from '../components/channel/ChannelBadge'
import SubscribeButton from '../components/channel/SubscribeButton'
import StreamList from '../components/streams/StreamList'
import StreamCard from '../components/streams/StreamCard'

function listStreamCards (streams, channel) {
  return streams.map((stream) => (
    <StreamCard stream={stream} user={channel} className='horizontal' />
  ))
}

export default ({
  user,
  streams,
  ...rest
}) => (
  <div className='channel container'>
    { user ? (
      <div>
        <div className='top-wrapper'>
          <span className='left'>
            <ChannelBadge channel={user} hideSubscribe />
          </span>
          <span className='right'>
            <SubscribeButton channel={user} showSubscribers />
          </span>
        </div>
        <div className='bottom-wrapper'>
          <StreamList style={{width: '100%', display: 'block'}}>
            {
              streams && streams.length > 0 ?
                listStreamCards(streams, user) : (
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
