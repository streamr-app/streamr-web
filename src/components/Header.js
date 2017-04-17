import React from 'react'

import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import NavigationContainer from './NavigationContainer'
import StreamOptionsContainer from './streams/StreamOptionsContainer'
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

    <Route path='/record' component={StreamOptionsContainer} />
  </header>
)
