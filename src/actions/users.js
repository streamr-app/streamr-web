export const API_ENDPOINT = `${process.env.API_ENDPOINT || ''}`

import { CALL_API } from 'redux-api-middleware'

import {
  fetch,
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

export function checkEmailAvailability (email) {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        endpoint: `${API_ENDPOINT}/users/email_available?email=${email}`,
        method: 'get',
        types: [ 'CHECK_EMAIL_REQUEST', 'CHECK_EMAIL_SUCCESS', 'CHECK_EMAIL_FAILURE' ]
      }
    })
  }
}

export function fetchUser (userId) {
  return fetch({
    url: 'users/' + userId,
    types: [ 'USER_REQUEST', 'USER_SUCCESS', 'USER_FAILURE' ]
  })
}
