import React from 'react'
import cx from 'classnames'

export default ({
  isSignedIn,
  numVotes,
  onClick,
  userHasVoted,
  onUpvote,
  onUnvote
}) => {
  if (!isSignedIn) return null

  return (
    <div
      className={cx('vote-button', { active: userHasVoted })}
      onClick={(e) => userHasVoted ? onUnvote() : onUpvote()}
    >
      <i className='fa fa-thumbs-up' />
      <span>{numVotes}</span>
    </div>
  )
}
