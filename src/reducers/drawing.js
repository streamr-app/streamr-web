export default function (
  state = {
    lines: [],
    currentLine: null,
    currentColor: 1
  },
  action
) {
  switch (action.type) {
    case 'CURSOR_MOVE':
      break
    case 'LINE_START':
      return {
        ...state,
        currentLine: { points: [], colorId: state.currentColor }
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
          points: state.currentLine.points.concat([ action.payload ])
        }
      }
    case 'COLOR_SET':
      return {
        ...state,
        currentColor: action.payload
      }
  }

  return state
}
