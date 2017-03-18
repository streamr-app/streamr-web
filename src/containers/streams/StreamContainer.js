import { connect } from 'react-redux'

import StreamView from '../../components/streams/StreamView'

import { fetchStream, fetchStreamData } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streamSlug = ownProps.params.streamSlug
  const streamId = streamSlug.split('-')[0]
  const stream = state.stream[streamId]

  if (!stream) {
    return { loading: true }
  }

  return {
    stream
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const streamSlug = ownProps.params.streamSlug
  const streamId = streamSlug.split('-')[0]

  dispatch(fetchStream(streamId))
    .then(() => dispatch(fetchStreamData(streamId)))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamView)
