import React from 'react'

export default ({
  children,
  className = '',
  streams,
  ...rest
}) => (
  <div className={`stream-list ${className}`} {...rest}>
    {children}
  </div>
)
