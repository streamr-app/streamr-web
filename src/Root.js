import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

import Application, { history } from './components/Application'

const store = configureStore(history)

;(function () {
  const { change } = require('redux-form')
  window.changeForm = (...args) => store.dispatch(change(...args))
})()

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={Application} />
    </ConnectedRouter>
  </Provider>
)
