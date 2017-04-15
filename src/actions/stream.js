import { CALL_API } from 'redux-api-middleware'
import { reset as resetForm } from 'redux-form'

import {
  fetch,
  createResource,
  performActionOnResource
} from './index'

export function loadStreams () {
  return fetch({
    url: 'streams',
    types: [ 'STREAMS_REQUEST', 'STREAMS_SUCCESS', 'STREAMS_FAILURE' ]
  })
}

export function loadTrendingStreams () {
  return fetch({
    url: 'streams',
    query: { page_size: 8 },
    types: [ 'TRENDING_STREAMS_REQUEST', 'TRENDING_STREAMS_SUCCESS', 'TRENDING_STREAMS_FAILURE' ]
  })
}

export function loadSubscriptionStreams () {
  return fetch({
    url: 'streams/subscribed',
    authenticated: true,
    query: { page_size: 8 },
    types: [ 'SUBSCRIPTION_STREAMS_REQUEST', 'SUBSCRIPTION_STREAMS_SUCCESS', 'SUBSCRIPTION_STREAMS_FAILURE' ]
  })
}

export function loadStreamsByTopic (topicId) {
  return fetch({
    url: `topics/${topicId}/streams`,
    authenticated: 'try',
    types: [ 'TOPIC_STREAMS_REQUEST', 'TOPIC_STREAMS_SUCCESS', 'TOPIC_STREAMS_FAILURE' ],
    responseInterceptor: (response) => ({ ...response, topicId })
  })
}

export function createStream (stream) {
  return createResource({
    url: 'streams',
    types: [ 'CREATE_STREAM_REQUEST', 'CREATE_STREAM_SUCCESS', 'CREATE_STREAM_FAILURE' ],
    body: { stream },
    authenticated: true
  })
}

export function fetchStream (streamId) {
  return fetch({
    url: `streams/${streamId}`,
    types: [ 'FETCH_STREAM_REQUEST', 'FETCH_STREAM_SUCCESS', 'FETCH_STREAM_FAILURE' ],
    authenticated: 'try'
  })
}

export function fetchStreamData (streamId) {
  return (dispatch, getState) => {
    const endpoint = getState().stream[streamId].dataUrl

    return new Promise((resolve) => {
      if (!endpoint) {
        setTimeout(() => {
          dispatch(fetchStream(streamId))
          dispatch(fetchStreamData(streamId)).then(resolve)
        }, 1000)
      } else {
        dispatch({
          [CALL_API]: {
            endpoint,
            method: 'GET',
            types: [
              'STREAM_DATA_REQUEST',
              {
                type: 'STREAM_DATA_SUCCESS',
                payload: (action, state, response) => {
                  return response.text().then(text => {
                    return { data: text, streamId }
                  })
                }
              },
              'STREAM_DATA_FAILURE'
            ]
          }
        }).then(resolve)
      }
    })
  }
}
export function setCurrentStream (streamId) {
  return {
    type: 'SET_CURRENT_STREAM',
    payload: streamId
  }
}

export function endCurrentStream () {
  return (dispatch, getState) => {
    dispatch(resetForm('stream-options'))

    return dispatch(performActionOnResource({
      url: `streams/${getState().drawing.currentStreamId}`,
      action: 'end',
      types: [ 'END_STREAM_REQUEST', 'END_STREAM_SUCCESS', 'END_STREAM_FAILURE' ],
      authenticated: true
    }))
  }
}

export function fetchStreamsByUser (userId) {
  return fetch({
    url: `users/${userId}/streams`,
    types: [ 'USER_STREAMS_REQUEST', 'USER_STREAMS_SUCCESS', 'USER_STREAMS_FAILURE' ],
    responseInterceptor: (response) => ({ ...response, userId }),
    authenticated: 'try'
  })
}
