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
      <img className='thumbnail' src='http://placehold.it/60x60' />
    </div>
    <div className='information-wrapper'>
      <div className='channel-name'>{channel.channel_name || channel.name}</div>
      <div className='channel-bio'>{channel.bio}</div>

      <SubscribeButton />
    </div>
  </div>
)
