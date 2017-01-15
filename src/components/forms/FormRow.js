import React from 'react'
import cx from 'classnames'

export default ({
  className,
  children,
  ...rest
}) => (
  <div className={cx('form-row', className)} {...rest}>
    {children}
  </div>
)
