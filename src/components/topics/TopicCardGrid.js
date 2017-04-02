import React from 'react'

import { TopicCard } from './TopicCard'

var listCards = (topics) => {
  return topics.map((topic) => {
    return (
      <TopicCard className='grid-card' topic={topic} key={topic.id} />
    )
  })
}

export default ({
  children,
  className = '',
  topics,
  ...rest
}) => (
  <div className={`topic-card-grid ${className}`} {...rest}>
    {listCards(topics)}
  </div>
)
