import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import streams from './data/streams'

import { ThumbButtons } from '../streams/ThumbButtons'
import { StreamCard } from '../streams/StreamCard'
import { StreamList } from '../streams/StreamList'

function listCards (streams) {
  return streams.map((stream) => (
    <StreamCard style={{ width: '150px', margin: '5px 10px' }} stream={stream} />
  ))
}

storiesOf('Streams', module)
  .add('Stream Card', () => (
    <StreamCard stream={streams[0]} />
  ))
  .add('Vertical Stream List', () => (
    <div style={{ width: '150px' }}>
      <StreamList>
        {listCards(streams)}
      </StreamList>
    </div>
  ))
  .add('Horizontal Stream List', () => (
    <div style={{ height: '200px' }}>
      <StreamList>
        {listCards(streams)}
      </StreamList>
    </div>
  ))
  .add('Likes / Dislikes', () => (
    <ThumbButtons likes={420} dislikes={71}
      onLike={action('Like')}
      onDislike={action('Dislike')} />
  ))
