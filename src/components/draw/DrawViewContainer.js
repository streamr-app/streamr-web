import { connect } from 'react-redux'

import DrawView from './DrawView'

import { persistCurrentLine } from '../../actions/lines'

function mapStateToProps (state, ownProps) {
  const streamId = state.drawing.currentStreamId
  const currentLine = state.drawing.currentLine
  const currentColor = (state.color[state.drawing.currentColor] || {}).hex
  const currentThickness = state.drawing.brushThickness
  const undoneLines = state.drawing.undoneLines

  return {
    streamId,
    currentLine,
    currentColor,
    currentThickness,
    undoneLines,
    enabled: state.drawing.isRecording
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
        type: 'LINE_START'
      })
    },
    onLineEnd (coordinates) {
      dispatch(persistCurrentLine())

      dispatch({
        type: 'LINE_END'
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
