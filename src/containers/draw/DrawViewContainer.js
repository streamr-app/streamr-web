import { connect } from 'react-redux'

import DrawView from '../../components/draw/DrawView'

function mapStateToProps (state, ownProps) {
  const currentLine = state.drawing.currentLine
  const currentColor = (state.color[state.drawing.currentColor] || {}).normal

  return {
    currentLine,
    currentColor
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onCursorMove (coordinates) {
      dispatch({
        type: 'CURSOR_MOVE',
        payload: coordinates
      })
    },
    onLineStart (coordinates) {
      dispatch({
        type: 'LINE_START',
        payload: coordinates
      })
    },
    onLineEnd (coordinates) {
      // TODO: dispatch(persistCurrentLine(streamId))

      dispatch({
        type: 'LINE_END',
        payload: coordinates
      })
    },
    onPointCreate (coordinates) {
      dispatch({
        type: 'POINT_CREATE',
        payload: coordinates
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawView)