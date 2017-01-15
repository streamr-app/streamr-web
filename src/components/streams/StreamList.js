import React from 'react'
import cx from 'classnames'

import { StreamCard } from './StreamCard'

export const StreamList = ({
  children,
  className = '',
  streams,
  ...rest
}) => (
  <div className={`stream-list ${className}`} {...rest}>
    {children}
  </div>
)
