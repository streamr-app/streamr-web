import { connect } from 'react-redux'

import UserCard from '../../components/users/UserCard'

function mapStateToProps (state, ownProps) {
  const user = state.user[ownProps.userId]

  return {
    user
  }
}

export default connect(mapStateToProps)(UserCard)
