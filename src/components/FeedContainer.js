import { connect } from 'react-redux'

import Feed from '../components/Feed'

function mapStateToProps (state, ownProps) {
  const isSignedIn = state.auth.userId

  return {
    isSignedIn
  }
}

export default connect(mapStateToProps)(Feed)
