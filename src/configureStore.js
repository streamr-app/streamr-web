import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  apiMiddleware,
  routerMiddleware(browserHistory)
)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
