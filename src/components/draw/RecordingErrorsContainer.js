import { connect } from 'react-redux'

import RecordingErrors from './RecordingErrors'

function mapStateToProps (state, ownProps) {
  return state.drawing
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordingErrors)
