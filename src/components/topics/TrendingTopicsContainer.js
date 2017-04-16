import { connect } from 'react-redux'
import at from 'lodash/at'

import TopicCardGrid from '../../components/topics/TopicCardGrid'

import { loadTopics } from '../../actions/topic'

function mapStateToProps (state, ownProps) {
  const topics = at(state.topic, state.topic.ids || [])

  return {
    topics
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadTopics())

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicCardGrid)
