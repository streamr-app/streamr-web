import { connect } from 'react-redux'

import DrawView from './DrawView'

function mapStateToProps (state, ownProps) {
  return {
    recording: state.recording.recording
  }
}

export default connect(mapStateToProps)(DrawView)
