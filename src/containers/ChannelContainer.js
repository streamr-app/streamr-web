import { connect } from 'react-redux'
import { fetchUser } from '../actions/users'
import { fetchStreamsByUser } from '../actions/stream'
import filter from 'lodash/filter'

import Channel from '../components/Channel'

function mapStateToProps (state, ownProps) {
  const user = state.user[ownProps.params.userId]

  let streams = null
  if (user) {
    streams = filter(state.stream, { user: { id: user.id } })
  }

  return {
    user,
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(fetchUser(ownProps.params.userId))
  dispatch(fetchStreamsByUser(ownProps.params.userId))
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
