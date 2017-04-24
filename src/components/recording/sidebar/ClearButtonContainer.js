import { connect } from 'react-redux'

import ClearButton from './ClearButton'

import { persistCurrentEvent } from '../../../actions/events'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onClick () {
      dispatch({ type: 'CLEAR_SCREEN' })
      dispatch(persistCurrentEvent())
      setTimeout(() => dispatch({ type: 'EVENT_END' }), 0)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearButton)
