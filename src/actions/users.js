// @flow

import type { APIAction } from './types'

import {
  createResource
} from './index'

export function createUser (payload: Object): APIAction {
  return createResource({
    url: 'users/new',
    types: [ 'CREATE_USER_REQUEST', 'CREATE_USER_SUCCESS', 'CREATE_USER_FAILURE' ],
    key: 'user',
    body: payload
  })
}
