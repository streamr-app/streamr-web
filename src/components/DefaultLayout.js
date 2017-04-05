import React from 'react'

import Header from './Header'
import Footer from './Footer'

import { Route, Switch } from 'react-router-dom'

import RecordLayout from './RecordLayout'
import Feed from './Feed'
import LoginContainer from '../containers/auth/LoginContainer'
import SignupContainer from '../containers/auth/SignupContainer'
import StreamContainer from '../containers/streams/StreamContainer'
import ChannelContainer from '../containers/ChannelContainer'

export default () => (
  <div>
    <Header />

    <main>
      <Switch>
        <Route path='/explore' component={Feed} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/profile/:userId' component={ChannelContainer} />
        <Route path='/record' component={RecordLayout} />
        <Route path='/:streamSlug' component={StreamContainer} />
      </Switch>
    </main>

    <Footer />
  </div>
)
