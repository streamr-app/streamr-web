import React from 'react'

import Helmet from 'react-helmet'
import { Match } from 'react-router'

import Header from './Header'
import SignupContainer from '../containers/auth/SignupContainer'

export default ({
  children
}) => (
  <div className='application'>
    <Helmet
      titleTemplate='Streamr — %s'
      defaultTitle='Streamr — Learn by Doodling'
      link={[
        { rel: 'shortcut icon', href: require('../images/favicon.ico') }
      ]}
     />

    <Header />

    <main>
      <Match pattern='/signup' component={SignupContainer} />
    </main>
  </div>
)
