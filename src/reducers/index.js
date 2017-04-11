import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

import auth from './auth'
import drawing from './drawing'
import stream from './stream'
import streamDataByStream from './streamDataByStream'
import user from './user'

const rootReducer = combineReducers({
  ...stubbedEntityReducers,
  auth,
  drawing,
  form: formReducer,
  router: routerReducer,
  stream,
  streamDataByStream,
  user
})

export default (state, action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
