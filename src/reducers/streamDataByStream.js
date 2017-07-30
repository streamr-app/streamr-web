import update from 'immutability-helper'

export default function (state = {}, action) {
  switch (action.type) {
    case 'STREAM_DATA_SUCCESS': {
      const streamId = action.payload.streamId

      return update(state, { [streamId]: { $set: action.payload.data } })
    }
  }

  return state
}
