import store from 'store'

export default function (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      store.set('auth', action.payload)

      return state
    }
  }

  return store.get('auth', {})
}
