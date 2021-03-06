import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

import auth from './auth'
import comment from './comment'
import recording from './recording'
import stream from './stream'
import streamDataByStream from './streamDataByStream'
import topic from './topic'
import user from './user'

const rootReducer = combineReducers({
  ...stubbedEntityReducers,
  auth,
  comment,
  recording,
  form: formReducer,
  router: routerReducer,
  stream,
  streamDataByStream,
  topic,
  user
})

export default (state, action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
