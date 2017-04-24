import React from 'react'

import Helmet from 'react-helmet'

import Bundle from './Bundle'

import DefaultLayout from './DefaultLayout'

import loadColorLoader from 'bundle-loader!./recording/ColorLoader'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

export default class Application extends React.Component {
  componentDidMount () {
    this.historyUnlisten = history.listen(() => this.scrollToTop())
  }

  componentWillUnmount () {
    this.historyUnlisten()
  }

  scrollToTop () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
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
      </div>
    )
  }
}
