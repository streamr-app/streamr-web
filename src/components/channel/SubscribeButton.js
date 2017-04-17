import React from 'react'
import cx from 'classnames'

import preventDefault from '../../utils/preventDefault'

export default ({
  className = '',
  user = {},
  isLoggedIn,
  isMe,
  updateSubscription,
  ...rest
}) => (
  (isLoggedIn && !isMe) ? (
    <div className={`subscribe-button ${className}`}>
      <a
        className={cx('button -small', { '-subtle -unsubscribe': user.currentUserSubscribed })}
        onClick={preventDefault(() => updateSubscription(!user.currentUserSubscribed))}
      >
        {user.currentUserSubscribed
          ? 'Unsubscribe'
          : 'Subscribe'}
      </a>
    </div>
  ) : null
)
