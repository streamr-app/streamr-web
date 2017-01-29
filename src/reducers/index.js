import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

import auth from './auth'
import user from './user'

const rootReducer = combineReducers({
  ...stubbedEntityReducers,
  auth,
  form: formReducer,
  user
})

export default (state, action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
