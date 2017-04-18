import { connect } from 'react-redux'

import StreamView from './StreamView'

import { fetchStream, fetchStreamData } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streamSlug = ownProps.match.params.streamSlug
  const streamId = streamSlug.split('-')[0]
  const stream = state.stream[streamId]
  const topic = state.topic[stream.topic.id]
  const colors = state.color

  if (!stream) {
    return { loading: true }
  }

  const streamData = state.streamDataByStream[stream.id]

  if (!streamData) {
    return { stream, loading: true }
  }

  return {
    colors,
    stream,
    topic,
    streamData
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const streamSlug = ownProps.match.params.streamSlug
  const streamId = streamSlug.split('-')[0]

  dispatch(fetchStream(streamId))
    .then(() => dispatch(fetchStreamData(streamId)))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamView)
