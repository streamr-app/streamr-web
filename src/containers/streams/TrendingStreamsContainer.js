import { connect } from 'react-redux'
import values from 'lodash/values'

import TrendingStreams from '../../components/streams/TrendingStreams'

import { loadStreams } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streams = values(state.stream)

  return {
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadStreams())

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingStreams)
