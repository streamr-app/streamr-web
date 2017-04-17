import {
  createResource,
  deleteResource
} from './index'

export function upvoteStream (streamId) {
  return createResource({
    url: `streams/${streamId}/my_vote`,
    types: [ 'STREAM_UPVOTE_REQUEST', 'STREAM_UPVOTE_SUCCESS', 'STREAM_UPVOTE_FAILURE' ],
    responseInterceptor: (response) => ({ ...response, streamId }),
    authenticated: true
  })
}

export function unvoteStream (streamId) {
  return deleteResource({
    url: `streams/${streamId}/my_vote`,
    types: [ 'STREAM_UNVOTE_REQUEST', 'STREAM_UNVOTE_SUCCESS', 'STREAM_UNVOTE_FAILURE' ],
    responseInterceptor: (response) => ({ ...response, streamId }),
    authenticated: true
  })
}
