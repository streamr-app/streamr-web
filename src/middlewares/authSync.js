import { default as localStore } from 'store'

export default store => next => action => {
  const prevState = store.getState()
  const result = next(action)
  const nextState = store.getState()

  if (prevState.auth !== nextState.auth) {
    localStore.set('auth', nextState.user)
  }

  return result
}
