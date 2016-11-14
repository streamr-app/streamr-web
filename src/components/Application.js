import React from 'react'

import Helmet from 'react-helmet'

import Header from './Header'

export default ({
  children
}) => (
  <div className='application'>
    <Helmet
      titleTemplate='Streamr — %s'
      defaultTitle='Streamr — Learn by Doodling' />

    <Header />

    <main>
      {/* routes */}
    </main>
  </div>
)
