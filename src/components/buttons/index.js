import React from 'react'

export const Button = ({
  children,
  className = '',
  ...rest
}) => (
  <button className={`button ${className}`} {...rest}>
    {children}
  </button>
)
