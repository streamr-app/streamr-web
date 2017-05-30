import React from 'react'
import cx from 'classnames'

export default ({
  isSignedIn,
  numVotes,
  userHasVoted,
  onUpvote,
  onUnvote
}) => {
  return (
    <div
      className={cx('vote-button', { active: userHasVoted, disabled: !isSignedIn })}
      onClick={() => (isSignedIn && userHasVoted) ? onUnvote() : onUpvote()}
    >
      <i className='fa fa-thumbs-up' />
      <span>{numVotes}</span>
    </div>
  )
}
