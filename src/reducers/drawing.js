export default function (
  state = {
    lines: [],
    colors: {
      1: { id: '1', normal: '#eee', order: '1' },
      2: { id: '2', normal: '#e06c75', order: '2' },
      3: { id: '3', normal: '#d19a66', order: '3' },
      4: { id: '4', normal: '#98c379', order: '4' },
      5: { id: '5', normal: '#61afef', order: '5' },
      6: { id: '6', normal: '#c678dd', order: '6' }
    },
    currentLine: null,
    currentColor: '1'
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
