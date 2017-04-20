import React from 'react'

import { Route } from 'react-router'

import Bundle from './Bundle'

export default ({
  component,
  ...rest
}) => (
  <Bundle load={component}>
    {(Component) => <Route {...rest} component={Component} />}
  </Bundle>
)
