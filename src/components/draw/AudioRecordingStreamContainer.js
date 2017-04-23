import { connect } from 'react-redux'

import AudioRecordingStream from './AudioRecordingStream'

function mapStateToProps (state, ownProps) {
  const streamId = state.recording.currentStreamId
  const authToken = state.auth.access_token
  const streamEnding = state.recording.streamEnding

  return {
    streamId,
    authToken,
    streamEnding
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onAudioReady () {
      dispatch({ type: 'AUDIO_READY' })
    },

    onMissingAPIs () {
      dispatch({ type: 'AUDIO_UNAVAILABLE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecordingStream)
