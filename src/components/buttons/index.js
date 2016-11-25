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
  <a className={`button ${className}`} {...rest}>
    {children}
  </a>
)
