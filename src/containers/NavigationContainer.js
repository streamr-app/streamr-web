import { connect } from 'react-redux'
import Navigation from '../components/Navigation'

function mapStateToProps (state, ownProps) {
  const currentUser = state.user[state.auth.userId]

  return {
    currentUser
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
