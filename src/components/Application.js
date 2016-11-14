// @flow

import React from 'react'

import Helmet from 'react-helmet'
import { Match } from 'react-router'

import Header from './Header'
import LoginContainer from '../containers/auth/LoginContainer'

type PropTypes = {
  children: any
}

export default ({
  children
}: PropTypes) => (
  <div className='application'>
    <Helmet
      titleTemplate='Streamr — %s'
      defaultTitle='Streamr — Learn by Doodling'
      link={[
        // $flow-ignore
        { rel: 'shortcut icon', href: require('../images/favicon.ico') }
      ]}
     />

    <Header />

    <main>
      <Match pattern='/login' component={LoginContainer} />
    </main>
  </div>
)
