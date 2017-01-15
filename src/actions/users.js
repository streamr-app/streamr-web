import {
  createResource
} from './index'

export function createUser (payload) {
  return createResource({
    url: 'users',
    types: [ 'CREATE_USER_REQUEST', 'CREATE_USER_SUCCESS', 'CREATE_USER_FAILURE' ],
    key: 'user',
    body: payload
  })
}
