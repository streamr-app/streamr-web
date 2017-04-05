import { connect } from 'react-redux'

import Comment from './Comment'

function mapStateToProps (state, ownProps) {
  const comment = state.comment[ownProps.commentId]
  const user = state.user[comment.user.id]

  return { comment, user }
}

export default connect(mapStateToProps)(Comment)
