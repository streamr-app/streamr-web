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

    this.group = this.svg.append('g')
      .attr('stroke-linecap', 'round')
      .attr('fill', 'none')

    this.group.append('rect')
      .attr('x', 0).attr('y', 0).attr('width', WIDTH).attr('height', HEIGHT)
      .attr('fill', 'rgb(33, 37, 43)')
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.currentLine)

    if (!nextProps.currentLine) {
      setTimeout(() => this.setState({ currentPath: null }))
      return
    }

    if (nextProps.currentLine.type === 'undo') {
      const lineId = nextProps.currentLine.lineId
      this.group.select(`#line-${lineId}`).attr('style', 'display: none')
      return
    }

    if (this.state.currentPath) {
      var path = this.state.currentPath
    } else {
      path = this.buildPath(nextProps.currentLine.sequenceNumber)
      setTimeout(() => this.setState({ currentPath: path }))
    }

    this.redrawLine(path, nextProps.currentLine)
  }

  buildPath (sequenceNumber) {
    return this.group.append('path')
      .attr('stroke', this.props.currentColor)
      .attr('stroke-width', this.props.currentThickness)
      .attr('id', `line-${sequenceNumber}`)
  }

  redrawLine (path, line) {
    path.attr('d', this.lineFunction(line.points))
  }

  render () {
    return <div ref='canvas' className='stream-renderer' />
  }
}

/* global d3 */
