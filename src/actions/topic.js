import {
  fetch
} from './index'

export function loadTopics () {
  return fetch({
    url: 'topics',
    types: [ 'TOPICS_REQUEST', 'TOPICS_SUCCESS', 'TOPICS_FAILURE' ]
  })
}
