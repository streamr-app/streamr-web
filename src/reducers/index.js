// @flow

import { combineReducers } from 'redux'

import entitiesReducer, { stubbedEntityReducers } from './entitiesReducer'

import type { Action } from '../actions/types'

const rootReducer = combineReducers({
  ...stubbedEntityReducers
})

export default (state: Object, action: Action) => {
  return rootReducer(entitiesReducer(state, action), action)
}
