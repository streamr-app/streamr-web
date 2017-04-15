import { CALL_API, getJSON } from 'redux-api-middleware'
import path from 'path'
import queryString from 'query-string'
import humps from 'humps'
import deserialize from '../utils/deserialize'

export const API_ENDPOINT = `${process.env.API_ENDPOINT || ''}`

export function fetch (options) {
  return baseRequest({
    method: 'GET',
    ...options
  })
}

export function createResource ({ body, key, ...options }) {
  if (body && key) {
    body = { [key]: body }
  }

  return baseRequest({
    method: 'POST',
    body,
    ...options
  })
}

export function updateResource ({ body, key, ...options }) {
  if (body && key) {
    body = { [key]: body }
  }

  return baseRequest({
    method: 'PATCH',
    body,
    key,
    ...options
  })
}

export function deleteResource (options) {
  return baseRequest({
    method: 'DELETE',
    ...options
  })
}

export function performActionOnResource ({ url, action, ...options }) {
  return baseRequest({
    method: 'POST',
    url: path.join(url, action || ''),
    ...options
  })
}

export function baseRequest ({
  url,
  headers: headerOverrides,
  body,
  query,

  schema,
  actionPayload,

  types: [ requestAction, successAction, failureAction ],

  authenticated = false,

  responseInterceptor = r => r,
  errorInterceptor = e => e,

  ...options
}) {
  return function (dispatch, getState) {
    var headers = {}

    if (query) {
      query = humps.decamelizeKeys(query)
      url += `?${queryString.stringify(query)}`
    }

    if (body) {
      headers['Content-Type'] = 'application/json'

      body = humps.decamelizeKeys(body)
      body = JSON.stringify(body)
    }

    if (authenticated) {
      let accessToken = getState().auth.access_token

      if (accessToken) {
        headers['Authorization'] = `Bearer ${getState().auth.access_token}`
      }
    }

    const request = {
      endpoint: `${API_ENDPOINT}${url}`,
      headers: {
        ...headers,
        ...headerOverrides
      },
      body,
      types: [requestAction,
        {
          type: successAction,
          payload: (action, state, response) => {
            if (actionPayload) {
              return actionPayload
            } else {
              return deserialize(response).then((data) => responseInterceptor(data, response))
            }
          }
        },
        {
          type: failureAction,
          payload: (action, state, res) => {
            return getJSON(res).then(errorInterceptor)
          }
        }],
      ...options
    }

    return dispatch({ [CALL_API]: request })
  }
}
