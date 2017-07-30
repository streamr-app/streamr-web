import update from 'immutability-helper'

export default function (state = {}, action) {
  switch (action.type) {
    case 'COMMENT_UPVOTE_SUCCESS':
      return update(state, {
        [action.payload.commentId]: {
          $merge: {
            currentUserVoted: true,
            votesCount: state[action.payload.commentId].votesCount + 1
          }
        }
      })

    case 'COMMENT_UNVOTE_SUCCESS':
      return update(state, {
        [action.payload.commentId]: {
          $merge: {
            currentUserVoted: false,
            votesCount: state[action.payload.commentId].votesCount - 1
          }
        }
      })

    default:
      return state
  }
}
