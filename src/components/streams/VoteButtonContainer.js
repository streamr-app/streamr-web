import { connect } from 'react-redux'

import VoteButton from './VoteButton'

import { upvoteStream, unvoteStream } from '../../actions/vote'

function mapStateToProps (state, ownProps) {
  const stream = state.stream[ownProps.streamId]
  const isSignedIn = state.auth.userId

  return {
    isSignedIn,
    numVotes: stream.votesCount,
    userHasVoted: stream.currentUserVoted
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onUpvote () {
      dispatch(upvoteStream(ownProps.streamId))
    },

    onUnvote () {
      dispatch(unvoteStream(ownProps.streamId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton)
