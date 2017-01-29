import { connect } from 'react-redux'
import ProfilePreview from '../../components/auth/ProfilePreview'

import { logout } from '../../actions/auth'

function mapStateToProps (state, ownProps) {
  const user = state.user[state.auth.userId]

  return {
    user
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onLogOut () {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePreview)
