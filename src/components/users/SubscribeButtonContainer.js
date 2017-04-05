import { connect } from 'react-redux'

import SubscribeButton from '../../components/channel/SubscribeButton'

import { subscribeToUser, unsubscribeToUser } from '../../actions/users'

function mapStateToProps (state, ownProps) {
  const user = state.user[ownProps.userId]

  return {
    user
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
