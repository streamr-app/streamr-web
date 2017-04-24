import { connect } from 'react-redux'

import MouseDrawingHandler from './MouseDrawingHandler'

import { persistCurrentEvent } from '../../actions/events'

function mapStateToProps (state, ownProps) {
  return {
    recording: state.recording
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

export default connect(mapStateToProps, mapDispatchToProps)(MouseDrawingHandler)
