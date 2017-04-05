export default function (state = {}, action) {
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
  }

  return state
}
