import React from 'react'
import { storiesOf } from '@kadira/storybook'

import topics from './data/topics'

import { TopicCard } from '../topics/TopicCard'
import { TopicCardGrid } from '../topics/TopicCardGrid'

storiesOf('Topics', module)
  .add('Topic Card', () => (
    <TopicCard topic={topics[0]} />
  ))
  .add('Topic Card Grid', () => (
    <div style={{ width: '800px', border: 'solid black 1px' }}>
      <TopicCardGrid topics={topics} />
    </div>
  ))
