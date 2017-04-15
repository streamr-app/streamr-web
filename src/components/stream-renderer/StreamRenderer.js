import React from 'react'

const WIDTH = 1920
const HEIGHT = 1080

export default class StreamRenderer extends React.Component {
  constructor (props) {
    super(props)
    this.lineFunction = d3.svg.line().x(d => d.x * WIDTH).y(d => d.y * HEIGHT).interpolate('cardinal')

    this.state = {
      currentPath: null
    }
  }

  componentDidMount () {
    const canvas = this.refs.canvas

    this.svg = d3.select(canvas).append('svg')
      .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

    window.drawingSvg = this.svg

    this.group = this.svg.append('g')
      .attr('stroke-linecap', 'round')
      .attr('fill', 'none')
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.currentLine) {
      setTimeout(() => this.setState({ currentPath: null }))
      return
    }

    if (this.state.currentPath) {
      var path = this.state.currentPath
    } else {
      path = this.buildPath()
      setTimeout(() => this.setState({ currentPath: path }))
    }

    this.redrawLine(path, nextProps.currentLine)
  }

  buildPath () {
    return this.group.append('path')
      .attr('stroke', this.props.currentColor)
      .attr('stroke-width', this.props.currentThickness)
  },

  redrawLine (path, line) {
    path.attr('d', this.lineFunction(line.points))
  }

  render () {
    return <div ref='canvas' className='stream-renderer' />
  }
}

/* global d3 */
