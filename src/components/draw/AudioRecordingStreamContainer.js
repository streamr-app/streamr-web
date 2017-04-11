import { connect } from 'react-redux'

import AudioRecordingStream from './AudioRecordingStream'

function mapStateToProps (state, ownProps) {
  const authToken = state.auth.access_token

  return {
    streamId: ownProps.streamId,
    authToken
  }
}

export default connect(mapStateToProps, null)(AudioRecordingStream)
