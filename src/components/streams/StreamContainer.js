import { connect } from 'react-redux'

import StreamView from './StreamView'
import queryString from 'query-string'

import { fetchStream, fetchStreamData } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streamSlug = ownProps.match.params.streamSlug
  const streamId = streamSlug.split('-')[0]
  const stream = state.stream[streamId]

  const initialPosition = parseTime(queryString.parse(ownProps.location.search).time)

  if (!stream) {
    return { initialPosition, loading: true }
  }

  const topic = state.topic[stream.topic.id]
  const colors = state.color

  const streamData = state.streamDataByStream[stream.id]

  if (!streamData) {
    return { stream, initialPosition, loading: true }
  }

  return {
    colors,
    stream,
    topic,
    streamData,
    initialPosition
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

function parseTime (timeDescription) {
  const timeRegex = /^(\d+)m(\d+)s$/

  if (!timeDescription || !timeRegex.test(timeDescription)) {
    return 0
  }

  const [ , minutes, seconds ] = timeDescription.match(timeRegex).map((a) => parseInt(a))

  return (minutes * 60 + seconds) * 1000
}
