import last from 'lodash/last'

const initialState = {
  lines: [],
  currentLine: null,
  currentColor: 1,
  thicknesses: [2, 3, 4, 6, 8],
  brushThickness: 2,
  currentStreamId: null,
  isRecording: false,
  undoHistory: [],
  undoneLine: [],
  streamEnding: false
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
          points: [ { ...action.payload, time } ]
        }
      }
    case 'LINE_END':
      if (!state.currentLine) return state

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

      if (state.undoHistory.length === 0) {
        return state
      }

      return {
        ...state,
        currentLine: { time, type: 'undo', lineId },
        undoHistory: state.undoHistory.slice(0, -1)
      }
    case 'CLEAR_SCREEN':
      return {
        ...state,
        undoHistory: [],
        currentLine: { time, type: 'clear' }
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
        isRecording: true
      }
    case 'AUDIO_READY':
      return {
        ...state,
        streamStart: performance.now()
      }
    case 'END_STREAM_REQUEST':
      return {
        ...state,
        streamEnding: true
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
