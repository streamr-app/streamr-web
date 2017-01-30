import React from 'react'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Application from './components/Application'
import Feed from './components/Feed'
import LoginContainer from './containers/auth/LoginContainer'
import SignupContainer from './containers/auth/SignupContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <IndexRoute component={Feed} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
    </Route>
  </Router>
)
