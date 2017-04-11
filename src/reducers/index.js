import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import { recorderReducer as recorder } from 'react-recorder-redux'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

import auth from './auth'
import drawing from './drawing'
import stream from './stream'
import streamDataByStream from './streamDataByStream'
import topic from './topic'
import user from './user'

const rootReducer = combineReducers({
  ...stubbedEntityReducers,
  auth,
  drawing,
  form: formReducer,
  recorder,
  router: routerReducer,
  stream,
  streamDataByStream,
  topic,
  user
})

export default (state, action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
