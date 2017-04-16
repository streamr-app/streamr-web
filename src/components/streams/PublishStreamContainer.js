import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import at from 'lodash/at'

import { fetchStream, updateStream, publishStream } from '../../actions/stream'
import { loadTopics } from '../../actions/topic'
import { push } from 'react-router-redux'

import PublishStreamView from './PublishStreamView'

function validate (values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Don't be afraid of commitment."
  }

  if (!values.description) {
    errors.description = "Listen, friend. I'm sick of you leaving things blank."
  }

  return errors
}

function mapStateToProps (state, ownProps) {
  const streamId = ownProps.match.params.streamSlug.replace(/\D/g, '')
  const stream = state.stream[streamId]
  const topics = at(state.topic, state.topic.ids || [])

  return {
    stream,
    topics,
    initialValues: {
      topicId: (topics[0] || {}).id
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const streamSlug = ownProps.match.params.streamSlug
  const streamId = streamSlug.replace(/\D/g, '')

  dispatch(fetchStream(streamId))
  dispatch(loadTopics())

  return {
    onSubmit (data) {
      return dispatch(updateStream(streamId, data))
        .then(() => dispatch(publishStream(streamId)))
        .then(() => dispatch(push(`/${streamSlug}`)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'publishStream',
    validate
  })(PublishStreamView)
)
