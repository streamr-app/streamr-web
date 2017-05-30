import { connect } from 'react-redux'

import VoteButton from './VoteButton'
import { upvoteComment, unvoteComment } from '../../actions/vote'

function mapStateToProps (state, ownProps) {
  const comment = state.comment[ownProps.commentId]
  const isSignedIn = state.auth.userId

  return {
    isSignedIn,
    numVotes: comment.votesCount,
    userHasVoted: comment.currentUserVoted
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onUpvote () {
      dispatch(upvoteComment(ownProps.commentId))
    },

    onUnvote () {
      dispatch(unvoteComment(ownProps.commentId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton)
