import { setColor } from './colors'
import { setThickness } from './thickness'

export function playStreamData (streamData) {
  return (dispatch, getState) => {
    const lines = streamData.split('\n').filter(l => l).map(JSON.parse)

    const actions = []

    lines.forEach(line => {
      const thickness = line.thickness
      const colorId = line.color_id
      var lastTime = 0

      actions.push([ line.points[0].time, setThickness(thickness) ])
      actions.push([ line.points[0].time, setColor(colorId) ])
      actions.push([ line.points[0].time, { type: 'LINE_START' } ])

      line.points.forEach(point => {
        actions.push([ point.time, { type: 'POINT_CREATE', payload: point } ])
        lastTime = point.time
      })

      actions.push([ lastTime + 1, { type: 'LINE_END' } ])
    })

    var cursor = 0
    var start = 0

    function callback (now) {
      var duration = now - start

      while (actions[cursor] && actions[cursor][0] <= duration) {
        const currentAction = actions[cursor]

        dispatch(currentAction[1])

        cursor++
      }

      if (cursor < actions.length - 1) {
        requestAnimationFrame(callback)
      }
    }

    setTimeout(() => requestAnimationFrame(callback), 2000)
  }
}

/* global requestAnimationFrame */
