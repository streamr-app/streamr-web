import { connect } from 'react-redux'

import AudioRecordingStream from './AudioRecordingStream'

function mapStateToProps (state, ownProps) {
  const streamId = state.drawing.currentStreamId
  const authToken = state.auth.access_token

  return {
    streamId,
    authToken
  }
}

export default connect(mapStateToProps)(AudioRecordingStream)
