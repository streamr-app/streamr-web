import React from 'react'

import Helmet from 'react-helmet'

import Bundle from './Bundle'

import DefaultLayout from './DefaultLayout'

import loadColorLoader from 'bundle-loader!./common/ColorLoader'
import createHistory from 'history/createBrowserHistory'

import loadScrollToTop from 'bundle-loader!./ScrollToTop'

export const history = createHistory()

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

    <Bundle load={loadColorLoader}>
      {(ColorLoader) => ColorLoader ? <ColorLoader /> : null}
    </Bundle>

    <Bundle load={loadScrollToTop}>
      {(ScrollToTop) => ScrollToTop ? <ScrollToTop /> : null}
    </Bundle>
  </div>
)
