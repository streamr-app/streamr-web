import React from 'react'

import Header from './Header'
import Footer from './Footer'

import { Route, Switch } from 'react-router-dom'

import ChannelContainer from './ChannelContainer'
import FeedContainer from './FeedContainer'
import LoginContainer from './auth/LoginContainer'
import PublishStreamContainer from './streams/PublishStreamContainer'
import RecordLayout from './RecordLayout'
import SearchResultsContainer from './search/SearchResultsContainer'
import SignupContainer from './auth/SignupContainer'
import MeContainer from './me/MeContainer'
import StreamContainer from './streams/StreamContainer'
import TopicContainer from './topics/TopicContainer'

export default () => (
  <div>
    <Header />

    <main>
      <Switch>
        <Route path='/' exact component={FeedContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />

        <Route path='/me' component={MeContainer} />

        <Route path='/profile/:userId' component={ChannelContainer} />

        <Route path='/record' component={RecordLayout} />

        <Route path='/topics/:topicId' component={TopicContainer} />

        <Route path='/search' component={SearchResultsContainer} />

        <Route path='/:streamSlug' exact component={StreamContainer} />
        <Route path='/:streamSlug/publish' component={PublishStreamContainer} />
      </Switch>
    </main>

    <Footer />
  </div>
)
