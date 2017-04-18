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

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onAudioReady () {
      console.log('Audio ready')
      dispatch({ type: 'AUDIO_READY' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioRecordingStream)
