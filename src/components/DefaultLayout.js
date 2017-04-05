import React from 'react'

import Header from './Header'
import Footer from './Footer'

import { Route, Switch } from 'react-router-dom'

import RecordLayout from './RecordLayout'
import Feed from './Feed'
import LoginContainer from './auth/LoginContainer'
import SignupContainer from './auth/SignupContainer'
import StreamContainer from './streams/StreamContainer'
import ChannelContainer from './ChannelContainer'

export default () => (
  <div>
    <Header />

    <main>
      <Switch>
        <Route path='/' exact component={Feed} />
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
