import last from 'lodash/last'

const initialState = {
  lines: [],
  currentLine: null,
  currentColor: 1,
  brushThickness: 2,
  currentStreamId: null,
  isRecording: false,
  undoHistory: [],
  undoneLine: []
}

export default function (
  state = initialState,
  action
) {
  var time = 0

  if (!isNaN(state.streamStart)) {
    time = Math.round(performance.now() - state.streamStart)
  }

  switch (action.type) {
    case 'CURSOR_MOVE':
      break
    case 'LINE_START':
      return {
        ...state,
        currentLine: {
          time,
          type: 'line',
          lineId: state.lines.length + 1,
          colorId: state.currentColor,
          thickness: state.brushThickness,
          points: []
        }
      }
    case 'LINE_END':
      return {
        ...state,
        lines: state.lines.concat([ state.currentLine ]),
        undoHistory: state.currentLine.type === 'line'
          ? state.undoHistory.concat([ state.currentLine.lineId ])
          : state.undoHistory,
        currentLine: null
      }
    case 'POINT_CREATE':
      return {
        ...state,
        currentLine: {
          ...state.currentLine,
          points: state.currentLine.points.concat([
            { ...action.payload, time }
          ])
        }
      }
    case 'UNDO_LINE':
      let lineId = last(state.undoHistory)
      if (!lineId) return state

      return {
        ...state,
        currentLine: { time, type: 'undo', lineId },
        undoHistory: state.undoHistory.slice(0, -1)
      }
    case 'COLOR_SET':
      return {
        ...state,
        currentColor: action.payload
      }
    case 'SET_THICKNESS':
      return {
        ...state,
        brushThickness: action.payload
      }
    case 'SET_CURRENT_STREAM':
      return {
        ...state,
        currentStreamId: action.payload,
        streamStart: performance.now(),
        isRecording: true
      }
    case 'END_STREAM_SUCCESS':
      return {
        ...state,
        ...initialState
      }
  }

  return state
}

/* global performance */
