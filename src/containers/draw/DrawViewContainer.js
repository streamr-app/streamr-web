import { connect } from 'react-redux'

import DrawView from '../../components/draw/DrawView'

import { persistCurrentLine } from '../../actions/lines'

function mapStateToProps (state, ownProps) {
  const currentLine = state.drawing.currentLine
  const currentColor = (state.color[state.drawing.currentColor] || {}).normal
  const currentThickness = state.drawing.brushThickness

  return {
    currentLine,
    currentColor,
    currentThickness
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
      dispatch(persistCurrentLine())

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
