import React from 'react'

export const Button = ({
  children,
  className,
  ...rest
}) => (
  <a className={`button ${className}`} {...rest}>
    {children}
  </a>
)
