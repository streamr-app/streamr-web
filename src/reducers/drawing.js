export default function (
  state = {
    lines: [],
    currentLine: null
  },
  action
) {
  switch (action.type) {
    case 'CURSOR_MOVE':
      break
    case 'LINE_START':
      return {
        ...state,
        currentLine: { points: [] }
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
  }

  return state
}
