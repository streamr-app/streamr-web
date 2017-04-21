import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import NewCommentContainer from './NewCommentContainer'

import Bundle from '../Bundle'
import loadCommentContainer from 'bundle-loader!./CommentContainer'

export default ({
  streamId,
  comments,
  isLoggedIn
}) => (
  <div className='stream-comments'>
    { (isLoggedIn) ? <NewCommentContainer streamId={streamId} /> : null }

    <Bundle load={loadCommentContainer}>
      {(CommentContainer) => (
        CommentContainer && comments.length > 0 &&
          <ReactCSSTransitionGroup
            transitionName='comment'
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {comments.map((comment) =>
              <CommentContainer key={comment.id} commentId={comment.id} />)}
          </ReactCSSTransitionGroup>
        )
      }
    </Bundle>

    {comments.length === 0 &&
      <p className='none'>This stream has no comments.</p>}
  </div>
)
