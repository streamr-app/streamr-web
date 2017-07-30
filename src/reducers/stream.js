import update from 'immutability-helper'

export default function (state = {
  fromSubscriptions: [],
  trending: []
}, action) {
  switch (action.type) {
    case 'STREAMS_SEARCH_REQUEST': {
      return update(state, { searchResults: { $set: [] } })
    }

    case 'STREAMS_SEARCH_SUCCESS': {
      return update(state, {
        searchResults: { $set: action.payload.result.stream }
      })
    }

    case 'FETCH_COMMENTS_SUCCESS': {
      return update(state, {
        [action.payload.streamId]: {
          comments: { $set: action.payload.result.comment }
        }
      })
    }

    case 'CREATE_COMMENT_SUCCESS': {
      return update(state, {
        [action.payload.streamId]: {
          comments: {
            $apply: (value) => ([
              ...action.payload.result.comment,
              ...(value || [])
            ])
          }
        }
      })
    }

    case 'SUBSCRIPTION_STREAMS_SUCCESS': {
      return update(state, { fromSubscriptions: { $set: action.payload.result.stream } })
    }

    case 'TRENDING_STREAMS_SUCCESS': {
      return update(state, { trending: { $set: action.payload.result.stream } })
    }

    case 'STREAM_UPVOTE_SUCCESS': {
      return update(state, {
        [action.payload.streamId]: {
          currentUserVoted: { $set: true },
          votesCount: { $apply: (value) => value + 1 }
        }
      })
    }

    case 'STREAM_UNVOTE_SUCCESS': {
      return update(state, {
        [action.payload.streamId]: {
          currentUserVoted: { $set: true },
          votesCount: { $apply: (value) => value - 1 }
        }
      })
    }
  }

  return state
}
