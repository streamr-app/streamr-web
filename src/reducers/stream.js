export default function (state = {
  fromSubscriptions: [],
  trending: []
}, action) {
  switch (action.type) {
    case 'STREAMS_SEARCH_SUCCESS': {
      return {
        ...state,
        searchResults: action.payload.result.stream
      }
    }

    case 'FETCH_COMMENTS_SUCCESS': {
      return {
        ...state,
        [action.payload.streamId]: {
          ...state[action.payload.streamId],
          comments: action.payload.result.comment
        }
      }
    }

    case 'CREATE_COMMENT_SUCCESS': {
      return {
        ...state,
        [action.payload.streamId]: {
          ...state[action.payload.streamId],
          comments: [
            ...action.payload.result.comment,
            ...(state[action.payload.streamId].comments || [])
          ]
        }
      }
    }

    case 'SUBSCRIPTION_STREAMS_SUCCESS': {
      return {
        ...state,
        fromSubscriptions: action.payload.result.stream
      }
    }

    case 'TRENDING_STREAMS_SUCCESS': {
      return {
        ...state,
        trending: action.payload.result.stream
      }
    }

    case 'STREAM_UPVOTE_SUCCESS': {
      return {
        ...state,
        [action.payload.streamId]: {
          ...state[action.payload.streamId],
          currentUserVoted: true,
          votesCount: state[action.payload.streamId].votesCount + 1
        }
      }
    }

    case 'STREAM_UNVOTE_SUCCESS': {
      return {
        ...state,
        [action.payload.streamId]: {
          ...state[action.payload.streamId],
          currentUserVoted: false,
          votesCount: state[action.payload.streamId].votesCount - 1
        }
      }
    }
  }

  return state
}
