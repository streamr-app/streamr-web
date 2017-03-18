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

export function createStream (stream) {
  return createResource({
    url: 'streams',
    types: [ 'CREATE_STREAM_REQUEST', 'CREATE_STREAM_SUCCESS', 'CREATE_STREAM_FAILURE' ],
    body: { stream },
    authenticated: true
  })
}

export function setCurrentStream (streamId) {
  return {
    type: 'SET_CURRENT_STREAM',
    payload: streamId
  }
}

export function endCurrentStream () {
  return (dispatch, getState) => {
    return dispatch(performActionOnResource({
      url: `streams/${getState().drawing.currentStreamId}`,
      action: 'end',
      types: [ 'END_STREAM_REQUEST', 'END_STREAM_SUCCESS', 'END_STREAM_FAILURE' ],
      authenticated: true
    }))
  }
}
