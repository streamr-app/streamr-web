import React from 'react'

import SubscribeButton from './SubscribeButton'

export default ({
  children,
  className = '',
  channel,
  hideInfo,
  hideSubscribe,
  ...rest
}) => (
  <div className={`channel-badge ${className}`} {...rest}>
    <div className='thumbnail-wrapper'>
      <img className='thumbnail' src={channel.profileImage} />
    </div>
    {
      !hideInfo ? (
        <div className='information-wrapper'>
          <div className='channel-name'>{channel.channelName || channel.name}</div>
          <div className='channel-bio'>{channel.bio || null}</div>
          {
            !hideSubscribe ? (
              <SubscribeButton />
            ) : null
          }
        </div>
      ) : null
    }
  </div>
)
