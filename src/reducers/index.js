import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

const rootReducer = combineReducers({
  ...stubbedEntityReducers,
  form: formReducer
})

export default (state, action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
