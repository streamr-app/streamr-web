import { connect } from 'react-redux'

import AudioRecordingStream from './AudioRecordingStream'
import { recorderStop } from 'react-recorder-redux/actions'

function mapStateToProps (state, ownProps) {
  const authToken = state.auth.access_token

  return {
    streamId: ownProps.streamId,
    authToken
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onRecordStop () {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecordingStream)
