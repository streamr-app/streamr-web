import React from 'react'

import DrawViewContainer from '../../containers/draw/DrawViewContainer'

export default React.createClass({
  getInitialState () {
    return {
      currentLine: null,
      currentColor: 'red',
      currentThickness: null
    }
  },

  render () {
    return (
      <div className='stream-player'>
        <DrawViewContainer />
      </div>
    )
  }
})
