import React from 'react'
import cx from 'classnames'

import preventDefault from '../../utils/preventDefault'

export default ({
  className = '',
  user = {},
  updateSubscription,
  ...rest
}) => (
  <div className={`subscribe-button ${className}`} {...rest}>
    <a
      className={cx('button -small', { '-subtle': user.currentUserSubscribed })}
      onClick={preventDefault(() => updateSubscription(!user.currentUserSubscribed))}
    >
      {user.currentUserSubscribed
        ? 'Unsubscribe'
        : 'Subscribe'}
    </a>
  </div>
)
