export default function(state = {}, action) {
  switch (action.type) {
    case 'COMMENT_UPVOTE_SUCCESS':
      return {
        ...state,
        [action.payload.commentId]: {
          ...state[action.payload.commentId],
          currentUserVoted: true,
          votesCount: state[action.payload.commentId].votesCount + 1
        }
      }

    case 'COMMENT_UNVOTE_SUCCESS':
      return {
        ...state,
        [action.payload.commentId]: {
          ...state[action.payload.commentId],
          currentUserVoted: false,
          votesCount: state[action.payload.commentId].votesCount - 1
        }
      }

    default:
      return state
  }
}
