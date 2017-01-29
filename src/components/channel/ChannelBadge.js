import React from 'react'

import { SubscribeButton } from './SubscribeButton'

export const ChannelBadge = ({
  children,
  className = '',
  channel,
  ...rest
}) => (
  <div className={`channel-badge ${className}`} {...rest}>
    <div className='thumbnail-wrapper'>
      <img className='thumbnail' src={channel.profileImage} />
    </div>
    <div className='information-wrapper'>
      <div className='channel-name'>{channel.channelName || channel.name}</div>
      <div className='channel-bio'>{channel.bio}</div>

      <SubscribeButton />
    </div>
  </div>
)
