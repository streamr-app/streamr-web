import { connect } from 'react-redux'
import at from 'lodash/at'

import TrendingStreams from './TrendingStreams'

import { loadSubscriptionStreams } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streams = at(state.stream, state.stream.fromSubscriptions || [])

  return {
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadSubscriptionStreams())

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingStreams)
