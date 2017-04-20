import React from 'react'

import Header from './Header'
import Footer from './Footer'

import Bundle from './Bundle'

import loadMainRoutes from 'bundle-loader!./MainRoutes'

export default () => (
  <div>
    <Header />

    <main>
      <Bundle load={loadMainRoutes}>
        {(MainRoutes) => MainRoutes ? <MainRoutes /> : null}
      </Bundle>
    </main>

    <Footer />
  </div>
)
