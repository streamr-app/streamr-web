import { CALL_API } from 'redux-api-middleware'
import { login } from './auth'

import {
  fetch,
  createResource,
  performActionOnResource
} from './index'

export const API_ENDPOINT = `${process.env.API_ENDPOINT || ''}`

export function createUser (payload) {
  return (dispatch, getState) => {
    return dispatch(createResource({
      url: 'users',
      types: [ 'CREATE_USER_REQUEST', 'CREATE_USER_SUCCESS', 'CREATE_USER_FAILURE' ],
      key: 'user',
      body: payload
    }))
      .then(() => dispatch(login(payload)))
  }
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
    types: [ 'USER_REQUEST', 'USER_SUCCESS', 'USER_FAILURE' ],
    authenticated: 'try'
  })
}

export function subscribeToUser (userId) {
  return performActionOnResource({
    url: `users/${userId}`,
    action: 'subscribe',
    types: ['SUBSCRIBE_REQUEST', 'SUBSCRIBE_SUCCESS', 'SUBSCRIBE_FAILURE'],
    authenticated: true,
    actionPayload: { userId }
  })
}

export function unsubscribeToUser (userId) {
  return performActionOnResource({
    url: `users/${userId}`,
    action: 'unsubscribe',
    types: ['UNSUBSCRIBE_REQUEST', 'UNSUBSCRIBE_SUCCESS', 'UNSUBSCRIBE_FAILURE'],
    authenticated: true,
    actionPayload: { userId }
  })
}
