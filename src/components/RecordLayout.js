import React from 'react'

import Helmet from 'react-helmet'

import { Route } from 'react-router-dom'
import DrawViewContainer from './draw/DrawViewContainer'

export default ({
  children
}) => (
  <div>
    <Helmet htmlAttributes={{ class: 'recording' }} />

    <Route path='/' component={DrawViewContainer} />
  </div>
)
