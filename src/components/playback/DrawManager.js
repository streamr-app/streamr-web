import EventEmitter from 'event-emitter'
import clamp from 'lodash/clamp'

const WIDTH = 1920
const HEIGHT = 1080

export default class DrawManager {
  constructor (svg, stream, colors) {
    this.svg = d3.select(svg)
    this.colors = colors
    this.duration = stream.duration * 1000
    this.position = 0
    this.needsRedraw = true
    this.lineFunction = d3.svg.line().x(d => d.x * WIDTH).y(d => d.y * HEIGHT).interpolate('cardinal')
  }

  loadData (streamData) {
    this.lines = streamData.split('\n').filter(l => l)
    this.parsedLines = []
    this.emit('READY')
  }

  play () {
    this.playing = true
    this._playFrom(this.position)
    this.emit('PLAY')
  }

  pause () {
    this.playing = false
    this._cancelNextFrame()
    this.emit('PAUSE')
  }

  setPosition (position) {
    const wasPlaying = this.playing
    if (this.playing) this.pause()

    if (position <= this.position) {
      this.needsRedraw = true
    }

    this.position = position

    this._draw()

    this.emit('POSITION_CHANGE')

    if (wasPlaying) this.play()
  }

  toggle () {
    this.playing ? this.pause() : this.play()
  }

  _playFrom (offset) {
    let start

    const initialPosition = this.position

    const frame = (now) => {
      if (!start) start = now

      this.position = clamp(initialPosition + now - start, 0, this.duration)
      this.emit('POSITION_CHANGE', this.position)

      if (this._draw()) {
        this._enqueueFrame(frame)
      } else {
        this.pause()
      }
    }

    this._enqueueFrame(frame)
  }

  _enqueueFrame (frame) {
    this.drawLoop = requestAnimationFrame(frame)
  }

  _cancelNextFrame () {
    cancelAnimationFrame(this.drawLoop)
  }

  _draw () {
    if (this.needsRedraw) {
      this._clear()
    }

    let currentLine

    if (this.lineCursor >= this.lines.length) {
      if (this.playing && this.position < this.duration) {
        return true
      } else {
        return false
      }
    }

    if (!this.parsedLines[this.lineCursor]) {
      this.parsedLines[this.lineCursor] = JSON.parse(this.lines[this.lineCursor])
      currentLine = this.parsedLines[this.lineCursor]
      this.color = currentLine.color_id
      this.thickness = currentLine.thickness

      this._buildPath()
    }

    currentLine = this.parsedLines[this.lineCursor]

    while (this.pointCursor < currentLine.points.length && currentLine.points[this.pointCursor].time <= this.position) {
      let currentPoint = currentLine.points[this.pointCursor]

      this._drawPoint(currentPoint)
      this._redrawLine()
      this.pointCursor++
    }

    if (this.pointCursor === currentLine.points.length) {
      this.pointCursor = 0
      this.lineCursor++
    }

    return true
  }

  _drawPoint (point) {
    this.points.push(point)
  }

  _buildPath () {
    this.points = []
    this.path = this.svg.append('path')
      .attr('stroke', this.colors[this.color].normal)
      .attr('stroke-width', this.thickness)
      .attr('stroke-linecap', 'round')
      .attr('fill', 'none')
  }

  _redrawLine () {
    this.path.attr('d', this.lineFunction(this.points))
  }

  _clear () {
    this.svg.selectAll('*').remove()
    this.needsRedraw = false
    this.lineCursor = 0
    this.pointCursor = 0
    this.parsedLines = []
  }
}

EventEmitter(DrawManager.prototype)

/* global d3, requestAnimationFrame, cancelAnimationFrame */
