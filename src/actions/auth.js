export const API_ENDPOINT = `${process.env.API_ENDPOINT || ''}`

import { CALL_API } from 'redux-api-middleware'

export function login (payload) {
  return {
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
  }
}
