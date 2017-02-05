import React from 'react'
import { action } from '@kadira/storybook'

export default ({
  className = '',
  channel,
  showSubscribers,
  ...rest
}) => (
  <div className={`subscribe-button ${className}`} {...rest}>
    {showSubscribers && channel.subscriberCount &&
      <div className='subscriber-count'>{channel.subscriberCount} subscribers</div>
    }
    <button onClick={action('Subscribing')}>Subscribe</button>
  </div>
)
