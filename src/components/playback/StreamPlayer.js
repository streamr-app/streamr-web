import React from 'react'

const WIDTH = 1920
const HEIGHT = 1080

export default React.createClass({
  componentDidMount () {
    const canvas = this.refs.canvas
    this.svg = d3.select(canvas).append('svg')
      .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

    const streamData = this.props.streamData
    const lines = streamData.split('\n').filter(l => l)
    const parsedLines = []

    var lineCursor = 0
    var pointCursor = 0
    var start = null

    const frame = (now) => {
      if (!start) start = now
      const duration = now - start

      if (!parsedLines[lineCursor]) {
        parsedLines[lineCursor] = JSON.parse(lines[lineCursor])
        this.buildPath()
      }

      const currentLine = parsedLines[lineCursor]

      this.color = currentLine.colorId
      this.thickness = currentLine.thickness

      while (pointCursor < currentLine.points.length && currentLine.points[pointCursor].time <= duration) {
        var currentPoint = currentLine.points[pointCursor]

        this.drawPoint(currentPoint)
        pointCursor++
      }

      if (pointCursor === currentLine.points.length) {
        pointCursor = 0
        lineCursor++
      }

      if (lineCursor < lines.length) {
        requestAnimationFrame(frame)
      }
    }

    setTimeout(() => {
      requestAnimationFrame(frame)
    }, 500)
  },

  lineFunction: d3.svg.line().x(d => d.x * WIDTH).y(d => d.y * HEIGHT).interpolate('cardinal'),

  drawPoint (point) {
    this.points.push(point)

    this.redrawLine()
  },

  buildPath () {
    this.points = []
    this.path = this.svg.append('path')
      .attr('stroke', 'red')
      .attr('stroke-width', this.thickness)
      .attr('stroke-linecap', 'round')
      .attr('fill', 'none')
  },

  redrawLine () {
    this.path.attr('d', this.lineFunction(this.points))
  },

  render () {
    return (
      <div className='stream-player'>
        <svg viewBox='0 0 1920 1080' ref='canvas' />
      </div>
    )
  }
})

/* global d3, setTimeout, requestAnimationFrame */
