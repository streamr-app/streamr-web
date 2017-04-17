import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import StreamOptions from './StreamOptions'

import { createStream, setCurrentStream, endCurrentStream } from '../../actions/stream'
import { push } from 'react-router-redux'

function mapStateToProps (state, ownProps) {
  const streamId = state.drawing.currentStreamId
  const recording = !!streamId
  const canStopRecording = state.drawing.lines && state.drawing.lines.length
  const streamEnding = state.drawing.streamEnding

  return {
    streamId,
    recording,
    canStopRecording,
    streamEnding,
    initialValues: {
      title: 'stream'
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      return dispatch(createStream(data))
        .then((action) => dispatch(setCurrentStream(action.payload.result.stream[0])))
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
