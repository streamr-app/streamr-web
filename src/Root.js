import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

import Application, { history } from './components/Application'

export default () => (
  <Provider store={configureStore(history)}>
    <ConnectedRouter history={history}>
      <Route path='/' component={Application} />
    </ConnectedRouter>
  </Provider>
)
