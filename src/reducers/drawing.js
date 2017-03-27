const initialState = {
  lines: [],
  currentLine: null,
  currentColor: 1,
  brushThickness: 2,
  currentStreamId: null,
  isRecording: false
}

export default function (
  state = initialState,
  action
) {
  switch (action.type) {
    case 'CURSOR_MOVE':
      break
    case 'LINE_START':
      return {
        ...state,
        currentLine: { points: [], colorId: state.currentColor, thickness: state.brushThickness }
      }
    case 'LINE_END':
      return {
        ...state,
        lines: state.lines.concat([ state.currentLine ]),
        currentLine: null
      }
    case 'POINT_CREATE':
      return {
        ...state,
        currentLine: {
          ...state.currentLine,
          points: state.currentLine.points.concat([
            { ...action.payload, time: Math.round(performance.now() - state.streamStart) }
          ])
        }
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
