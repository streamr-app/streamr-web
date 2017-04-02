import store from 'store'

export default function (state = null, action) {
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
  }

  return state || store.get('user', {})
}
