// @flow

import React from 'react'
import cx from 'classnames'

type PropTypes = {
  className: ?string,
  children: any
}

export default ({
  className,
  children,
  ...rest
}: PropTypes) => (
  <div className={cx('form-row', className)} {...rest}>
    {children}
  </div>
)
