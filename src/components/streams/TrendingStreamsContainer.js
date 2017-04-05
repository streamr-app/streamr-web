import { connect } from 'react-redux'
import at from 'lodash/at'

import TrendingStreams from './TrendingStreams'

import { loadTrendingStreams } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streams = at(state.stream, state.stream.trending || [])

  return {
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadTrendingStreams())

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingStreams)
