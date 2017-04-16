import { connect } from 'react-redux'

import UndoButton from './UndoButton'

import { persistCurrentLine } from '../../actions/lines'

function mapStateToProps (state, ownProps) {
  return {}
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
