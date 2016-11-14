import React from 'react'
import { render } from 'react-dom'

import { AppContainer as HotEnabler } from 'react-hot-loader'

import Root from './Root'

import 'normalize.css/normalize.css'
import './styles/index.styl'

render(
  <HotEnabler>
    <Root />
  </HotEnabler>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    var Root = require('./Root')

    render(
      <HotEnabler>
        <Root />
      </HotEnabler>,
      document.getElementById('app')
    )
  })
}
