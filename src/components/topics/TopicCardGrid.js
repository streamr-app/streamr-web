import React from 'react'

import { TopicCard } from './TopicCard'

var listCards = (topics) => {
  return topics.map((topic) => {
    return (
      <TopicCard className='grid-card' topic={topic} />
    )
  })
}

export const TopicCardGrid = ({
  children,
  className = '',
  topics,
  ...rest
}) => (
  <div className={`topic-card-grid ${className}`} {...rest}>
    {listCards(topics)}
  </div>
)
