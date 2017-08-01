import store from 'store'

export default function (state = store.get('auth', {}), action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return action.payload
    }
    case 'CURRENT_USER_SUCCESS': {
      const userId = action.payload.result.user[0]
      return { ...state, userId }
    }
    case 'LOGOUT': {
      return {}
    }
  }

  return state
}
