import {
  fetch
} from './index'

export function loadStreams () {
  return fetch({
    url: 'streams',
    types: [ 'STREAMS_REQUEST', 'STREAMS_SUCCESS', 'STREAMS_FAILURE' ]
  })
}
