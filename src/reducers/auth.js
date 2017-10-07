export default function (state = {}, action) {
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
