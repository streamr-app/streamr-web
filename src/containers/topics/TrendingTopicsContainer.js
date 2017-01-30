import { connect } from 'react-redux'
import values from 'lodash/values'

import TopicCardGrid from '../../components/topics/TopicCardGrid'

import { loadTopics } from '../../actions/topic'

function mapStateToProps (state, ownProps) {
  const topics = values(state.topic)

  return {
    topics
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadTopics())

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicCardGrid)
