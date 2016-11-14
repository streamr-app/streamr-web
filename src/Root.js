import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import configureStore from './configureStore'

import Application from './components/Application'

export default () => (
  <BrowserRouter>
    <Provider store={configureStore()}>
      <Application />
    </Provider>
  </BrowserRouter>
)
