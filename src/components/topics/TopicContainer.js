import { connect } from 'react-redux'
import at from 'lodash/at'

import TopicView from './TopicView'

import { loadTopics } from '../../actions/topic'
import { loadStreamsByTopic } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const topic = state.topic[ownProps.match.params.topicId] || {}
  const streams = at(state.stream, topic.streams || [])

  return {
    topic,
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadTopics())
  dispatch(loadStreamsByTopic(ownProps.match.params.topicId))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicView)
