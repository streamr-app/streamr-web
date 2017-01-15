import React from 'react'
import { action } from '@kadira/storybook'

export const SubscribeButton = ({
  children,
  className = '',
  channel,
  showSubscribers,
  ...rest
}) => (
  <div className={`subscribe-button ${className}`} {...rest}>
    {showSubscribers &&
      <div className='subscriber-count'>{channel.subscriberCount} subscribers</div>
    }
    <button onClick={action('Subscribing')}>Subscribe</button>
  </div>
)
