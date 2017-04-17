import { connect } from 'react-redux'

import SubscribeButton from '../../components/channel/SubscribeButton'

import { subscribeToUser, unsubscribeToUser } from '../../actions/users'

function mapStateToProps (state, ownProps) {
  const user = state.user[ownProps.userId]
  const isMe = state.auth.userId === ownProps.userId
  const isLoggedIn = !!state.auth.userId

  return {
    user,
    isLoggedIn,
    isMe
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    updateSubscription (shouldSubscribe) {
      if (shouldSubscribe) {
        dispatch(subscribeToUser(ownProps.userId))
      } else {
        dispatch(unsubscribeToUser(ownProps.userId))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeButton)
