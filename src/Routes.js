import React from 'react'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Application from './components/Application'
import DefaultLayout from './components/DefaultLayout'
import RecordLayout from './components/RecordLayout'

import Feed from './components/Feed'
import LoginContainer from './containers/auth/LoginContainer'
import SignupContainer from './containers/auth/SignupContainer'
import DrawViewContainer from './containers/draw/DrawViewContainer'
import StreamContainer from './containers/streams/StreamContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <Route path='/' component={DefaultLayout}>
        <Route path='/explore' component={Feed} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/record' component={RecordLayout}>
          <IndexRoute component={DrawViewContainer} />
        </Route>

        <Route path='/:streamSlug' component={StreamContainer} />
      </Route>

      <IndexRoute component={DefaultLayout} />
    </Route>
  </Router>
)
