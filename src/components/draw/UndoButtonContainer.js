import { connect } from 'react-redux'

import UndoButton from './UndoButton'

import { persistCurrentLine } from '../../actions/lines'

function mapStateToProps (state, ownProps) {
  const disabled = state.drawing.undoHistory.length === 0

  return {
    disabled
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onClick () {
      dispatch({ type: 'UNDO_LINE' })
      dispatch(persistCurrentLine())
      setTimeout(() => dispatch({ type: 'LINE_END' }), 0)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoButton)
