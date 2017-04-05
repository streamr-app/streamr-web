import React from 'react'

import Helmet from 'react-helmet'

import DefaultLayout from './DefaultLayout'

import ColorLoader from './draw/ColorLoader'
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

        <ColorLoader />
      </div>
    )
  }
}
