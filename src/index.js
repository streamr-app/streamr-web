import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer as HotEnabler } from 'react-hot-loader'

import Root from './Root'

import './config/moment.config.js'

import 'normalize.css/normalize.css'
import './styles/index.styl'

import 'html-loader!./200.html'

const render = (Component) => {
  ReactDOM.render(
    <HotEnabler>
      <Component />
    </HotEnabler>,
    document.getElementById('app')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
