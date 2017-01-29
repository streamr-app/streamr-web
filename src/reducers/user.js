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

    case 'LOGOUT': {
      return { }
    }
  }

  return state || store.get('user', {})
}
