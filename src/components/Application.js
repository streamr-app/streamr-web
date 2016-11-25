// @flow

import React from 'react'

import Helmet from 'react-helmet'

import Header from './Header'

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
      {/* routes */}
    </main>
  </div>
)
