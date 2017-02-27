import React from 'react'
import forEach from 'lodash/forEach'

import Mousetrap from 'mousetrap'

export default React.createClass({
  componentDidMount () {
    forEach(this.props.bindings || [], (callback, key) => {
      Mousetrap.bind(key, callback)
    })
  },

  componentWillUnmount () {
    forEach(this.props.bindings || [], (_, key) => {
      Mousetrap.unbind(key)
    })
  },

  render () {
    return null
  }
})
