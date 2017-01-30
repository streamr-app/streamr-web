import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import comments from './data/comments'
import streams from './data/streams'

import { Comment } from '../streams/Comment'
import { CommentList } from '../streams/CommentList'
import { ThumbButtons } from '../streams/ThumbButtons'
import { StreamCard } from '../streams/StreamCard'
import { StreamList } from '../streams/StreamList'

function listStreamCards (streams) {
  return streams.map((stream) => (
    <StreamCard style={{ width: '150px', margin: '5px 10px' }} stream={stream} />
  ))
}

function listCommentCards (comments) {
  return comments.map((comment) => (
    <Comment comment={comment} style={{ 'marginBottom': '6px' }} />
  ))
}

storiesOf('Streams', module)
  .add('Stream Card', () => (
    <StreamCard stream={streams[0]} />
  ))
  .add('Vertical Stream List', () => (
    <div style={{ width: '150px' }}>
      <StreamList>
        {listStreamCards(streams)}
      </StreamList>
    </div>
  ))
  .add('Horizontal Stream List', () => (
    <div style={{ height: '200px' }}>
      <StreamList>
        {listStreamCards(streams)}
      </StreamList>
    </div>
  ))
  .add('Likes / Dislikes', () => (
    <ThumbButtons likes={420} dislikes={71}
      onLike={action('Like')}
      onDislike={action('Dislike')} />
  ))
  .add('Stream Comment', () => (
    <div style={{ width: '400px' }}>
      <Comment comment={comments[0]} />
    </div>
  ))
  .add('Stream Comment List', () => (
    <div style={{ width: '400px' }}>
      <CommentList>
        {listCommentCards(comments)}
      </CommentList>
    </div>
  ))
