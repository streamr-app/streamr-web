import { connect } from 'react-redux'
import at from 'lodash/at'

import Channel from '../components/Channel'

function mapStateToProps (state, ownProps) {
  const channel = state.user[state.auth.userId]
  const streams = at(state.stream, channel.streams)

  return {
    channel,
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
