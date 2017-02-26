import { connect } from 'react-redux'

import DrawTest from '../../components/draw/DrawTest'

function mapStateToProps (state, ownProps) {
  const currentLine = state.drawing.currentLine

  return {
    currentLine
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawTest)
