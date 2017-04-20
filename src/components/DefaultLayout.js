import React from 'react'

import loadHeader from 'bundle-loader!./Header'
import Footer from './Footer'

import Bundle from './Bundle'

import loadMainRoutes from 'bundle-loader!./MainRoutes'

export default () => (
  <div>
    <Bundle load={loadHeader}>
      {(Header) => Header ? <Header /> : null}
    </Bundle>

    <main>
      <Bundle load={loadMainRoutes}>
        {(MainRoutes) => MainRoutes ? <MainRoutes /> : null}
      </Bundle>
    </main>

    <Footer />
  </div>
)
