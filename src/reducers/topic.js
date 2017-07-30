import update from 'immutability-helper'

export default function (state = {}, action) {
  switch (action.type) {
    case 'TOPICS_SUCCESS': {
      return update(state, {
        ids: { $set: action.payload.result.topic }
      })
    }

    case 'TOPIC_STREAMS_SUCCESS': {
      return update(state, {
        [action.payload.topicId]: {
          streams: { $set: action.payload.result.stream }
        }
      })
    }
  }

  return state
}
