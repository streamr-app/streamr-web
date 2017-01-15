import React from 'react'

import { Router, Route, browserHistory } from 'react-router'

import Application from './components/Application'
import SignupContainer from './containers/auth/SignupContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <Route path='/signup' component={SignupContainer} />
    </Route>
  </Router>
)
