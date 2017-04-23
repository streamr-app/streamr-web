import { connect } from 'react-redux'

import DrawView from './DrawView'

import { persistCurrentEvent } from '../../actions/lines'

function mapStateToProps (state, ownProps) {
  const streamId = state.drawing.currentStreamId
  const currentEvent = state.drawing.currentEvent
  const currentColor = (state.color[state.drawing.currentColor] || {}).hex
  const thicknesses = state.drawing.thicknesses
  const currentThickness = thicknesses[state.drawing.brushThickness]
  const undoneLines = state.drawing.undoneLines
  const audioAPIsUnavailable = state.drawing.audioAPIsUnavailable

  return {
    streamId,
    currentEvent,
    currentColor,
    currentThickness,
    undoneLines,
    audioAPIsUnavailable,
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
        type: 'LINE_START',
        payload: coordinates
      })
    },
    onLineEnd (coordinates) {
      dispatch(persistCurrentEvent())

      dispatch({
        type: 'EVENT_END'
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
