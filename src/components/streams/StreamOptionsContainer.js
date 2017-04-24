import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import StreamOptions from './StreamOptions'

import { startStream, endCurrentStream } from '../../actions/stream'
import { push } from 'react-router-redux'

function mapStateToProps (state, ownProps) {
  const streamId = state.recording.currentStreamId
  const recording = state.recording.recording
  const canStopRecording = state.recording.eventCount > 0

  return {
    streamId,
    recording,
    canStopRecording,
    recordingStarted: state.recording.recordingStarted,
    recordingStopped: state.recording.recordingStopped,
    recordingError: !!state.recording.error
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit () {
      return dispatch(startStream())
    },

    onStopRecording (event) {
      event.preventDefault()

      return dispatch(endCurrentStream())
        .then((action) => {
          const streamId = action.payload.result.stream[0]
          const slug = action.payload.entities.stream[streamId].slug
          dispatch(push(`/${slug}/publish`))
        })
    }
  }
}

function validate (values) {
  const errors = {}

  if (/^\s*$/.test(values.title || '')) {
    errors.title = 'This stream needs a name.'
  }

  return errors
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'stream-options',
    validate
  })(StreamOptions)
)
