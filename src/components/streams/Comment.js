import React from 'react'

import { ChannelBadge } from '../channel/ChannelBadge'

export const Comment = ({
  className = '',
  comment,
  ...rest
}) => (
  <div className={`comment ${className}`} {...rest}>
    <ChannelBadge className='badge' channel={comment.channel} hideInfo />
    <span className='right-container'>
      <div className='channel-name'>{comment.channel.name}</div>
      <div className='message'>{comment.message}</div>
    </span>
    <span className='elapsed-time'>{comment.createdAt.fromNow(true)}</span>
  </div>
)
