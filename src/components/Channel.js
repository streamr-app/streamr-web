import React from 'react'

import ChannelBadge from '../components/channel/ChannelBadge'
import SubscribeButton from '../components/channel/SubscribeButton'
import StreamList from '../components/streams/StreamList'
import StreamCard from '../components/streams/StreamCard'

function listStreamCards (streams, channel) {
  return streams.map((stream) => (
    <StreamCard stream={stream} user={channel} />
  ))
}

export default ({
  channel,
  streams,
  ...rest
}) => (
  <div className='channel container'>
    <div className='top-wrapper'>
      <span className='left'>
        <ChannelBadge channel={channel} hideSubscribe />
      </span>
      <span className='right'>
        <SubscribeButton channel={channel} showSubscribers />
      </span>
    </div>
    <div className='bottom-wrapper'>
      <StreamList style={{width: '100%', display: 'block'}}>
        {listStreamCards(streams, channel)}
      </StreamList>
    </div>
  </div>
)
