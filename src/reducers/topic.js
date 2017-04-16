export default function (state = {}, action) {
  switch (action.type) {
    case 'TOPICS_SUCCESS': {
      return {
        ...state,
        ids: action.payload.result.topic
      }
    }

    case 'TOPIC_STREAMS_SUCCESS': {
      return {
        ...state,
        [action.payload.topicId]: {
          ...state[action.payload.topicId],
          streams: action.payload.result.stream
        }
      }
    }
  }

  return state
}
