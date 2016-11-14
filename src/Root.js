import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import configureStore from './configureStore'

import MessageContainer from './containers/MessageContainer'

export default () => (
  <BrowserRouter>
    <Provider store={configureStore()}>
      <MessageContainer />
    </Provider>
  </BrowserRouter>
)
