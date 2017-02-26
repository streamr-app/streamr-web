import React from 'react'

import { Router, Route, browserHistory } from 'react-router'

import Application from './components/Application'
import Feed from './components/Feed'
import LoginContainer from './containers/auth/LoginContainer'
import SignupContainer from './containers/auth/SignupContainer'
import DrawViewContainer from './containers/draw/DrawViewContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <Route path='/explore' component={Feed} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/draw-test' component={DrawViewContainer} />
    </Route>
  </Router>
)
