import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import NewCommentContainer from './NewCommentContainer'
import CommentContainer from './CommentContainer'

export default ({
  streamId,
  comments,
  isLoggedIn
}) => (
  <div className='stream-comments'>
    { (isLoggedIn) ? <NewCommentContainer streamId={streamId} /> : null }

    {comments.length > 0 &&
      <ReactCSSTransitionGroup
        transitionName='comment'
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        {comments.map((comment) => (
          <CommentContainer key={comment.id} commentId={comment.id} />
        ))}
      </ReactCSSTransitionGroup>
    }

    {comments.length === 0 &&
      <p className='none'>This stream has no comments.</p>}
  </div>
)
