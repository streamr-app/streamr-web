import { connect } from 'react-redux'

import SubscribeButton from '../../components/channel/SubscribeButton'

function mapStateToProps (state, ownProps) {
  const user = state.user[ownProps.userId]

  return {
    user
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubscribe () {
      // TODO
    },

    onUnsubscribe () {
      // TODO
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeButton)
