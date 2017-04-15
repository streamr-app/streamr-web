import React from 'react'
import forEach from 'lodash/forEach'

import mousetrap from 'mousetrap'

export default class Mousetrap extends React.Component {
  componentDidMount () {
    forEach(this.props.bindings || [], (callback, key) => {
      mousetrap.bind(key, callback)
    })
  }

  componentWillUnmount () {
    forEach(this.props.bindings || [], (_, key) => {
      mousetrap.unbind(key)
    })
  }

  render () {
    return null
  }
}
