import store from 'store'

export default function (state = null, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      store.set('auth', action.payload)

      return action.payload
    }
    case 'CURRENT_USER_SUCCESS': {
      const userId = action.payload.result.user[0]

      store.set('auth', {
        ...store.get('auth'),
        userId
      })

      return { ...state, userId }
    }
    case 'LOGOUT': {
      store.clearAll()

      return {}
    }
  }

  return state || store.get('auth', {})
}
