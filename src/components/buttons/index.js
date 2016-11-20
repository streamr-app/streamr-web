// @flow

import React from 'react'

type PropTypes = {
  children: ?any,
  className: string
}

export const Button = ({
  children,
  className = '',
  ...rest
}: PropTypes) => (
  <button className={`button ${className}`} {...rest}>
    {children}
  </button>
)
