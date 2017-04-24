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

    this.svg.append('rect')
      .attr('x', 0).attr('y', 0).attr('width', WIDTH).attr('height', HEIGHT)
      .attr('fill', 'rgb(33, 37, 43)')

    this.group = this.svg.append('g')
      .attr('stroke-linecap', 'round')
      .attr('fill', 'none')
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.currentEvent) {
      setTimeout(() => this.setState({ currentPath: null }))
      return
    }

    if (nextProps.currentEvent.type === 'undo') {
      const lineId = nextProps.currentEvent.lineId
      const lines = document.querySelectorAll(`.line-${lineId}`)

      lines.forEach((line) => { line.style.display = 'none' })
      return
    }

    if (nextProps.currentEvent.type === 'clear') {
      this.group.selectAll('*').remove()
      return
    }

    if (this.state.currentPath) {
      var path = this.state.currentPath
    } else {
      path = this.buildPath(nextProps.currentEvent.lineId)
      setTimeout(() => this.setState({ currentPath: path }))
    }

    this.redrawLine(path, nextProps.currentEvent)
  }

  buildPath (lineId) {
    return this.group.append('path')
      .attr('stroke', this.props.currentColor)
      .attr('stroke-width', this.props.currentThickness)
      .attr('class', `line-${lineId}`)
  }

  redrawLine (path, line) {
    path.attr('d', this.lineFunction(line.points))
  }

  render () {
    return <div ref='canvas' className='stream-renderer' />
  }
}

/* global d3 */
