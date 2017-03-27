import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

import Application from './components/Application'

const history = createHistory()

export default () => (
  <Provider store={configureStore(history)}>
    <ConnectedRouter history={history}>
      <Route path='/' component={Application} />
    </ConnectedRouter>
  </Provider>
)
