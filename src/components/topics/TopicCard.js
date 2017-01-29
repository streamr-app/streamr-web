import React from 'react'

export const TopicCard = ({
  children,
  className = '',
  topic,
  ...rest
}) => (
  <div className={`topic-card ${className}`} {...rest}>
    <span className='topic-thumbnail'>
      <img src={topic.thumbnail} />
    </span>
    <span className='title-wrapper'>
      <span className='title'>{topic.title}</span>
    </span>
  </div>
)
