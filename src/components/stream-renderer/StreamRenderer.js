import React from 'react'

const WIDTH = 1920
const HEIGHT = 1080

export default React.createClass({
  getInitialState () {
    return {
      currentPath: null
    }
  },

  componentDidMount () {
    const canvas = this.refs.canvas

    this.svg = d3.select(canvas).append('svg')
      .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
  },

  lineFunction: d3.svg.line().x(d => d.x * WIDTH).y(d => d.y * HEIGHT).interpolate('cardinal'),

  componentDidUpdate () {
    if (!this.props.currentLine) {
      setTimeout(() => this.setState({ currentPath: null }))
      return
    }

    var path

    if (this.state.currentPath) {
      path = this.state.currentPath
    } else {
      path = this.svg.append('path')
        .attr('stroke', this.props.currentColor)
        .attr('stroke-width', 3)
        .attr('stroke-linecap', 'round')
        .attr('fill', 'none')

      this.setState({ currentPath: path })
    }

    const points = this.props.currentLine.points

    if (points.length) {
      path.attr('d', this.lineFunction(points))
    }
  },

  render () {
    return <div ref='canvas' className='stream-renderer' />
  }
})

/* global d3 */
