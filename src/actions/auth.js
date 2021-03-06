import { fetch } from './index'
import { CALL_API } from 'redux-api-middleware'

export const API_ENDPOINT = `${process.env.API_ENDPOINT || ''}`

export function loadCurrentUser () {
  return fetch({
    url: 'users/me',
    authenticated: true,
    types: ['CURRENT_USER_REQUEST', 'CURRENT_USER_SUCCESS', 'CURRENT_USER_FAILURE']
  })
}

export function login (payload) {
  return (dispatch, getState) => {
    return dispatch({
      [CALL_API]: {
        endpoint: `${API_ENDPOINT}users/auth`,
        method: 'POST',
        types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grant_type: 'password',
          username: payload.email,
          password: payload.password
        })
      }
    })
    .then((action) => dispatch(loadCurrentUser()))
  }
}

export function logout () {
  return (dispatch, getState) => {
    dispatch({
      type: 'LOGOUT'
    })

    window.location = '/'
  }
}

export function requestPasswordReset (email) {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}password_reset`,
      method: 'POST',
      types: ['REQUEST_PASSWORD_RESET_REQUEST', 'REQUEST_PASSWORD_RESET_SUCCESS', 'REQUEST_PASSWORD_RESET_FAILURE'],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email
      })
    }
  }
}

export function resetPassword ({ token, password }) {
  return {
    [CALL_API]: {
      endpoint: `${API_ENDPOINT}password_reset`,
      method: 'PUT',
      types: ['RESET_PASSWORD_REQUEST', 'RESET_PASSWORD_SUCCESS', 'RESET_PASSWORD_FAILURE'],
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
        password
      })
    }
  }
}
