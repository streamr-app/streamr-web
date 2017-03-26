import React from 'react'

import DrawViewContainer from '../../containers/draw/DrawViewContainer'

import { setColor } from '../../actions/colors'
import { setThickness } from '../../actions/thickness'


export default React.createClass({
  getInitialState () {
    return {
      currentLine: null,
      currentColor: 'red',
      currentThickness: null
    }
  },

  componentDidMount () {
    const streamData = this.props.streamData
    const lines = streamData.split('\n').filter(l => l).map(JSON.parse)
  },

  render () {
    return (
      <div className='stream-player'>
        <DrawViewContainer />
      </div>
    )
  }
})

/* global requestAnimationFrame */
