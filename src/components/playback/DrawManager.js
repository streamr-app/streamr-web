import EventEmitter from 'event-emitter'
import allOff from 'event-emitter/all-off'
import clamp from 'lodash/clamp'
import last from 'lodash/last'

const WIDTH = 1920
const HEIGHT = 1080

export default class DrawManager {
  constructor (svg) {
    this.svg = d3.select(svg)
    this.lineFunction = d3.svg.line().x(d => d.x * WIDTH).y(d => d.y * HEIGHT).interpolate('cardinal')

    this.eventCursor = 0
    this.needsRedraw = false
    this.parsedLines = []
    this.pointCursor = 0
    this.position = 0
    this.ready = false
    this.undoQueue = []
  }

  prepare (stream, streamData, colors) {
    this.duration = stream.duration * 1000
    this.events = streamData.split('\n').filter(l => l)
    this.colors = colors

    this._setUpLine()
    this.ready = true
    this.emit('READY')
  }

  play () {
    if (!this.ready) return

    this.playing = true
    this._playFrom()
    this.emit('POSITION_CHANGE', this.position, true)
    this.emit('PLAY')
  }

  pause () {
    if (!this.ready) return

    this.playing = false
    this._cancelNextFrame()
    this.emit('PAUSE')
  }

  toggle () {
    this.playing ? this.pause() : this.play()
  }

  stop () {
    allOff(this)
  }

  setPosition (position) {
    position = clamp(position, 0, this.duration)

    if (!this.ready) return

    const wasPlaying = this.playing
    if (wasPlaying) this.pause()

    if (position <= this.position) {
      this.needsRedraw = true
    }

    this.position = position
    this.emit('POSITION_CHANGE', this.position)

    this._draw()

    if (wasPlaying) this.play()
  }

  _playFrom () {
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
        this.needsRedraw = true
        this.position = 0
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

    if (
      !this.playing &&
      this.currentEvent &&
      this.currentEvent.time > this.position
    ) {
      return true
    }

    this._performUndos()
    this._performClears()

    if (!this.playing && (this._isUndo() || this._isClear())) {
      return this._draw()
    }

    if (!this._doneDrawing() && !this.path) {
      this._setUpLine()
    }

    if (this._doneDrawing()) {
      if (this.playing && this.position < this.duration) {
        return true
      } else {
        return false
      }
    }

    while (this.currentEvent && this._isLine() && this.position > last(this.currentEvent.points).time) {
      while (!this._doneDrawingLine()) {
        this._addCurrentPoint()
        this._nextPoint()
      }

      this._redrawLine()
      this._nextLine()
    }

    while (this.currentEvent && this._isLine() && !this._doneDrawingLine() && this._currentPointIsInPast()) {
      this._addCurrentPoint()
      this._redrawLine()
      this._nextPoint()
    }

    if (this.currentEvent && this._isLine() && this._doneDrawingLine()) {
      this._nextLine()
    }

    if (!this.playing && (this._isUndo() || this._isClear())) {
      return this._draw()
    }

    return true
  }

  _performUndos () {
    while (this.currentEvent && this._isUndo() && this.currentEvent.time <= this.position) {
      const lineId = this.currentEvent.line_id
      const lines = document.querySelectorAll(`.line-${lineId}`)
      lines.forEach((line) => { line.style.display = 'none' })
      this._nextLine()
    }
  }

  _performClears () {
    while (this.currentEvent && this._isClear() && this.currentEvent.time <= this.position) {
      this.svg.selectAll('*').remove()
      this._nextLine()
    }
  }

  _isUndo () {
    return this.currentEvent && this.currentEvent.type === 'undo'
  }

  _isClear () {
    return this.currentEvent && this.currentEvent.type === 'clear'
  }

  _isLine () {
    return this.currentEvent && this.currentEvent.type === 'line'
  }

  _getParsedLine (index) {
    if (!this.parsedLines[index]) {
      this.parsedLines[index] = JSON.parse(this.events[index] || 'null')
    }

    return this.parsedLines[index]
  }

  _nextLine () {
    this.eventCursor++
    this.pointCursor = 0
    this._setUpLine()

    while (this.currentEvent && this.currentEvent.points && this.currentEvent.points.length === 0) {
      this._nextLine()
    }
  }

  _nextPoint () {
    this.pointCursor++
  }

  _setUpLine () {
    this.currentEvent = this._getParsedLine(this.eventCursor)

    if (this.currentEvent && this.currentEvent.type === 'line') {
      this.color = this.currentEvent.color_id
      this.thickness = this.currentEvent.thickness
      this._buildPath()
    }
  }

  _addCurrentPoint () {
    this.points.push(this._currentPoint())
  }

  _currentPoint () {
    return this.currentEvent.points[this.pointCursor]
  }

  _doneDrawingLine () {
    return this.pointCursor >= this.currentEvent.points.length
  }

  _currentPointIsInPast () {
    return this.currentEvent.points[this.pointCursor].time <= this.position
  }

  _doneDrawing () {
    return this.eventCursor >= this.events.length
  }

  _buildPath (lineId) {
    this.points = []
    this.path = this.svg.append('path')
      .attr('stroke', this.colors[this.color].hex)
      .attr('stroke-width', this.thickness)
      .attr('stroke-linecap', 'round')
      .attr('fill', 'none')
      .attr('class', `line-${this.currentEvent.line_id}`)
  }

  _redrawLine () {
    this.path.attr('d', this.lineFunction(this.points))
  }

  _clear () {
    this.svg.selectAll('*').remove()
    this.needsRedraw = false
    this.eventCursor = 0
    this.pointCursor = 0
    this.currentEvent = null
    this.path = null
  }
}

EventEmitter(DrawManager.prototype)

/* global d3, requestAnimationFrame, cancelAnimationFrame */
