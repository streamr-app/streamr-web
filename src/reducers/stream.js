export default function (state = {
  fromSubscriptions: [],
  trending: []
}, action) {
  switch (action.type) {
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
  }

  return state
}
