import store from 'store'

export default function (state = store.get('user') || {}, action) {
  switch (action.type) {
    case 'CURRENT_USER_SUCCESS': {
      const userId = action.payload.result.user[0]
      const user = action.payload.entities.user[userId]

      store.set('user', {
        ...store.get('user'),
        [userId]: user
      })

      return { ...state, [userId]: user }
    }
    case 'USER_STREAMS_SUCCESS': {
      const userId = action.payload.userId

      return {
        ...state,
        [userId]: {
          ...state[userId],
          streams: action.payload.result.stream
        }
      }
    }

    case 'LOGOUT': {
      return { }
    }

    case 'SUBSCRIBE_SUCCESS': {
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          currentUserSubscribed: true
        }
      }
    }

    case 'UNSUBSCRIBE_SUCCESS': {
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          currentUserSubscribed: false
        }
      }
    }
  }

  return state
}
