import React from 'react'

import Header from './Header'
import Footer from './Footer'

import { Route, Switch } from 'react-router-dom'

import ChannelContainer from './ChannelContainer'
import Feed from './Feed'
import LoginContainer from './auth/LoginContainer'
import RecordLayout from './RecordLayout'
import SignupContainer from './auth/SignupContainer'
import StreamContainer from './streams/StreamContainer'
import TopicContainer from './topics/TopicContainer'
import SearchResultsContainer from './search/SearchResultsContainer'

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

        <Route path='/topics/:topicId' component={TopicContainer} />

        <Route path='/search' component={SearchResultsContainer} />

        <Route path='/:streamSlug' component={StreamContainer} />
      </Switch>
    </main>

    <Footer />
  </div>
)
