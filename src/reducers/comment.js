import update from 'immutability-helper'

export default function (state = {}, action) {
  switch (action.type) {
    case 'COMMENT_UPVOTE_SUCCESS':
      return update(state, {
        [action.payload.commentId]: {
          currentUserVoted: { $set: true },
          votesCount: { $apply: (value) => value + 1 }
        }
      })

    case 'COMMENT_UNVOTE_SUCCESS':
      return update(state, {
        [action.payload.commentId]: {
          currentUserVoted: { $set: false },
          votesCount: { $apply: (value) => value - 1 }
        }
      })

    default:
      return state
  }
}
