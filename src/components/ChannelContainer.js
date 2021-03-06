import { connect } from 'react-redux'
import { fetchUser } from '../actions/users'
import { fetchStreamsByUser } from '../actions/stream'
import at from 'lodash/at'
import compact from 'lodash/compact'

import Channel from '../components/Channel'

function mapStateToProps (state, ownProps) {
  const user = state.user[ownProps.match.params.userId]

  if (!user) return { loading: true }

  const streams = compact(at(state.stream, user.streams || []))

  return {
    user,
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const userId = ownProps.match.params.userId

  dispatch(fetchUser(userId))
    .then(() => dispatch(fetchStreamsByUser(userId)))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
