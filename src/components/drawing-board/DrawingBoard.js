import React from 'react'

import throttle from 'lodash/throttle'

import Measure from 'react-measure'

export default React.createClass({
  getInitialState () {
    return {
      drawing: false
    }
  },

  componentDidMount () {
    this.throttledPointCreate = throttle(this.props.onPointCreate, 20, { leading: true, trailing: true })
    this.throttledCursorMove = throttle(this.props.onCursorMove, 50, { leading: true, trailing: true })
  },

  mouseDownCallback (event, measurements) {
    this.props.onLineStart(this.getRelativePosition(event, measurements))

    this.setState({ drawing: true })
  },

  mouseUpCallback (event, measurements) {
    if (this.state.drawing) {
      this.throttledPointCreate.cancel()
      this.props.onLineEnd(this.getRelativePosition(event, measurements))
    }

    this.setState({ drawing: false })
  },

  mouseMoveCallback (event, measurements) {
    if (this.state.drawing) {
      this.throttledPointCreate(this.getRelativePosition(event, measurements))
    } else {
      this.throttledCursorMove(this.getRelativePosition(event, measurements))
    }
  },

  mouseLeaveCallback (event, measurement) {
    this.setState({ drawing: false })
    if (this.state.drawing) {
      this.props.onPointCreate(this.getRelativePosition(event, measurement))
      this.props.onLineEnd(this.getRelativePosition(event, measurement))
    }
  },

  getRelativePosition (event, measurements) {
    const x = (event.pageX - measurements.left) / measurements.width
    const y = (event.pageY - measurements.top) / measurements.height

    return { x, y }
  },

  render () {
    const {
      children
    } = this.props

    return (
      <div className='drawing-board'>
        <Measure>
          {(measurements) => (
            <div className='click-zone'
              onMouseDown={(event) => this.mouseDownCallback(event, measurements)}
              onMouseMove={(event) => this.mouseMoveCallback(event, measurements)}
              onMouseUp={(event) => this.mouseUpCallback(event, measurements)}
              onMouseLeave={(event) => this.mouseLeaveCallback(event, measurements)}>
              {children}
            </div>
          )}
        </Measure>
      </div>
    )
  }
})
