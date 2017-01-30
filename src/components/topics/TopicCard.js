import React from 'react'

export const TopicCard = ({
  className = '',
  topic,
  ...rest
}) => (
  <div className={`topic-card ${className}`} {...rest}>
    {topic.thumbnail &&
      <span className='topic-thumbnail'>
        <img src={topic.thumbnail} />
      </span>
    }
    <span className='title-wrapper'>
      <span className='title'>{topic.name}</span>
    </span>
  </div>
)
