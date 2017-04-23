import { connect } from 'react-redux'

import DrawView from './DrawView'

import { persistCurrentEvent } from '../../actions/events'

function mapStateToProps (state, ownProps) {
  const {
    currentEvent,
    thicknesses,
    recording
  } = state.recording

  const streamId = state.recording.currentStreamId
  const currentColor = (state.color[state.recording.currentColor] || {}).hex
  const currentThickness = thicknesses[state.recording.brushThickness]

  return {
    streamId,
    currentEvent,
    currentColor,
    currentThickness,
    recording
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  function dispatchDrawEvent (event, coordinates) {
    dispatch({ type: event, payload: coordinates })
  }

  return {
    onCursorMove (coordinates) {
      dispatchDrawEvent('CURSOR_MOVE', coordinates)
    },

    onLineStart (coordinates) {
      dispatchDrawEvent('LINE_START', coordinates)
    },

    onLineEnd (coordinates) {
      dispatch(persistCurrentEvent())
      dispatchDrawEvent('EVENT_END', coordinates)
    },

    onPointCreate (coordinates) {
      dispatchDrawEvent('POINT_CREATE', coordinates)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawView)
