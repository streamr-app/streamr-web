import { connect } from 'react-redux'

import UndoButton from './UndoButton'

import { persistCurrentEvent } from '../../../actions/events'

function mapStateToProps (state, ownProps) {
  const disabled = state.recording.undoHistory.length === 0

  return {
    disabled
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onClick () {
      dispatch({ type: 'UNDO_LINE' })
      dispatch(persistCurrentEvent())
      setTimeout(() => dispatch({ type: 'EVENT_END' }), 0)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoButton)
