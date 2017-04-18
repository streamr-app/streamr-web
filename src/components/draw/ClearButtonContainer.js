import { connect } from 'react-redux'

import ClearButton from './ClearButton'

import { persistCurrentLine } from '../../actions/lines'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onClick () {
      dispatch({ type: 'CLEAR_SCREEN' })
      dispatch(persistCurrentLine())
      setTimeout(() => dispatch({ type: 'LINE_END' }), 0)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearButton)
