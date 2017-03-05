import React from 'react'

import Helmet from 'react-helmet'

import Header from './Header'
import ColorLoader from '../containers/draw/ColorLoader'

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
      {children}
    </main>

    <ColorLoader />
  </div>
)
