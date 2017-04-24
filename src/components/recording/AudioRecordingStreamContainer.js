import { connect } from 'react-redux'

import AudioRecordingStream from './AudioRecordingStream'

function mapStateToProps (state, ownProps) {
  return {
    authToken: state.auth.access_token,
    streamId: state.recording.currentStreamId,
    recordingStopped: state.recording.recordingStopped
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onAudioReady () {
      dispatch({ type: 'AUDIO_READY' })
    },

    onWebsocketFailure () {
      dispatch({ type: 'RECORDING_SERVICE_UNAVAILABLE' })
    },

    onMissingAPIs () {
      dispatch({ type: 'AUDIO_UNAVAILABLE' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecordingStream)
