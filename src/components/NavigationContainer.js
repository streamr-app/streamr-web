import { connect } from 'react-redux'

import Navigation from '../components/Navigation'

function mapStateToProps (state, ownProps) {
  const isSignedIn = state.auth.userId

  return {
    isSignedIn
  }
}

export default connect(mapStateToProps)(Navigation)
