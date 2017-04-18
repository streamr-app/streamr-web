import React from 'react'
import cx from 'classnames'

export default ({
  onClick,
  disabled
}) => (
  <div className={cx('sidebar-button undo-button', { disabled })} {...{ onClick }} />
)
