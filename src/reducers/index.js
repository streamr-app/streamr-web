// @flow

import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

import type { Action } from '../actions/types'

const rootReducer = combineReducers({
  ...stubbedEntityReducers,
  form: formReducer
})

export default (state: Object, action: Action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
