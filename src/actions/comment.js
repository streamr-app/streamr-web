import {
  fetch,
  createResource
} from './index'

export function fetchCommentsForStream (streamId) {
  return fetch({
    url: `/streams/${streamId}/comments`,
    types: ['FETCH_COMMENTS_REQUEST', 'FETCH_COMMENTS_SUCCESS', 'FETCH_COMMENTS_REQUEST'],
    responseInterceptor: (response) => ({ ...response, streamId })
  })
}

export function createCommentForStream (streamId, payload) {
  return createResource({
    url: `streams/${streamId}/comments`,
    types: [ 'CREATE_COMMENT_REQUEST', 'CREATE_COMMENT_SUCCESS', 'CREATE_COMMENT_FAILURE' ],
    key: 'comment',
    authenticated: true,
    body: payload,
    responseInterceptor: (response) => ({ ...response, streamId })
  })
}
