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

export function upvoteComment (commentId) {
  return createResource({
    url: `comments/${commentId}/my_vote`,
    types: [ 'COMMENT_UPVOTE_REQUEST', 'COMMENT_UPVOTE_SUCCESS', 'COMMENT_UPVOTE_FAILURE' ],
    responseInterceptor: (response) => ({ ...response, commentId }),
    authenticated: true
  })
}

export function unvoteComment (commentId) {
  return deleteResource({
    url: `comments/${commentId}/my_vote`,
    types: [ 'COMMENT_UNVOTE_REQUEST', 'COMMENT_UNVOTE_SUCCESS', 'COMMENT_UNVOTE_FAILURE' ],
    responseInterceptor: (response) => ({ ...response, commentId }),
    authenticated: true
  })
}
