import React from 'react'

import { Link } from 'react-router-dom'

export const TopicCard = ({
  className = '',
  topic,
  ...rest
}) => (
  <Link to={`/topics/${topic.id}`} className={`topic-card ${className}`} {...rest}>
    {topic.thumbnail &&
      <span className='topic-thumbnail'>
        <img src={topic.thumbnail} />
      </span>
    }
    <span className='title-wrapper'>
      <span className='title'>{topic.name}</span>
    </span>
  </Link>
)
