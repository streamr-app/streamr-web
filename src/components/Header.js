import React from 'react'

import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import AsyncRoute from './AsyncRoute'

import NavigationContainer from './NavigationContainer'
import loadStreamOptionsContainer from 'bundle-loader!./streams/StreamOptionsContainer'
import SearchFieldContainer from './search/SearchFieldContainer'

export default () => (
  <header role='main'>
    <div className='container'>
      <h1>
        <Link to='/'>
          <img src={require('../images/header-logo.png')} alt='Streamr' />
          <img src={require('../images/header-logo-text.png')} alt='Streamr' />
        </Link>
      </h1>

      <Route component={SearchFieldContainer} />

      <NavigationContainer />
    </div>

    <AsyncRoute path='/record' component={loadStreamOptionsContainer} />
  </header>
)
