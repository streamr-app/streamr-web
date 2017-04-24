import React from 'react'

import { Switch } from 'react-router-dom'

import loadChannelContainer from 'bundle-loader!./ChannelContainer'
import loadFeedContainer from 'bundle-loader!./FeedContainer'
import loadLoginContainer from 'bundle-loader!./auth/LoginContainer'
import loadPublishStreamContainer from 'bundle-loader!./streams/PublishStreamContainer'
import loadDrawViewContainer from 'bundle-loader!./recording/DrawViewContainer'
import loadSearchResultsContainer from 'bundle-loader!./search/SearchResultsContainer'
import loadForgotPasswordContainer from 'bundle-loader!./me/ForgotPasswordContainer'
import loadPasswordResetContainer from 'bundle-loader!./me/PasswordResetContainer'
import loadSignupContainer from 'bundle-loader!./auth/SignupContainer'
import loadMeContainer from 'bundle-loader!./me/MeContainer'
import loadStreamContainer from 'bundle-loader!./streams/StreamContainer'
import loadTopicContainer from 'bundle-loader!./topics/TopicContainer'

import AsyncRoute from './AsyncRoute'

export default () => (
  <Switch>
    <AsyncRoute path='/' exact component={loadFeedContainer} />

    <AsyncRoute path='/login' component={loadLoginContainer} />

    <AsyncRoute path='/signup' component={loadSignupContainer} />

    <AsyncRoute path='/me' component={loadMeContainer} />

    <AsyncRoute path='/profile/:userId' component={loadChannelContainer} />

    <AsyncRoute path='/forgot' component={loadForgotPasswordContainer} />

    <AsyncRoute path='/password-reset' component={loadPasswordResetContainer} />

    <AsyncRoute path='/record' component={loadDrawViewContainer} />

    <AsyncRoute path='/topics/:topicId' component={loadTopicContainer} />

    <AsyncRoute path='/search' component={loadSearchResultsContainer} />

    <AsyncRoute path='/:streamSlug' exact component={loadStreamContainer} />

    <AsyncRoute path='/:streamSlug/publish' component={loadPublishStreamContainer} />
  </Switch>
)
