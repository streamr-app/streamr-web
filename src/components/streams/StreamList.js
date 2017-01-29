import React from 'react'

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
