export default function (state = {}, action) {
  switch (action.type) {
    case 'STREAM_DATA_SUCCESS': {
      const streamId = action.payload.streamId

      return { ...state, [streamId]: action.payload.data }
    }
  }

  return state
}
