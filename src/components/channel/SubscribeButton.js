import React from 'react'
import preventDefault from '../../utils/preventDefault'

export default ({
  className = '',
  channel,
  showSubscribers,
  onClick,
  ...rest
}) => (
  <div className={`subscribe-button ${className}`} {...rest}>
    {showSubscribers && channel.subscriberCount &&
      <div className='subscriber-count'>{channel.subscriberCount} subscribers</div>
    }
    <a className='button -primary -small' onClick={preventDefault(onClick)}>Subscribe</a>
  </div>
)
