import { default as localStore } from 'store'

export default store => next => action => {
  const prevState = store.getState()
  const result = next(action)
  const nextState = store.getState()

  if (prevState.user !== nextState.user) {
    localStore.set('user', nextState.user)
  }

  return result
}
