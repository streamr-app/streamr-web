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

    this.measurer = setInterval(() => this.refs.measure.measure(), 100)
  },

  componentWillUnmount () {
    clearInterval(this.measurer)
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

    return { x: this.round(x, 5), y: this.round(y, 5) }
  },

  round (number, precision) {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
  },

  render () {
    const {
      children
    } = this.props

    return (
      <div className='mouse-drawing-handler'>
        <Measure ref='measure' whitelist={['width', 'height', 'top', 'right', 'bottom', 'left']}>
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
