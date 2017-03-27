import React from 'react'

import Helmet from 'react-helmet'

import DefaultLayout from './DefaultLayout'

import ColorLoader from '../containers/draw/ColorLoader'

export default () => (
  <div className='application'>
    <Helmet
      titleTemplate='Streamr — %s'
      defaultTitle='Streamr — Learn by Doodling'
      link={[
        { rel: 'shortcut icon', href: require('../images/favicon.ico') }
      ]}
     />

    <DefaultLayout />

    <ColorLoader />
  </div>
)
