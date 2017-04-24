import { createResource } from './index'

export function persistCurrentEvent () {
  return (dispatch, getState) => {
    const event = getState().recording.currentEvent

    if (!event) return

    dispatch(createResource({
      url: `/streams/${getState().recording.currentStreamId}/add_line`,
      types: ['PERSIST_CURRENT_LINE_REQUEST', 'PERSIST_CURRENT_LINE_SUCCESS', 'PERSIST_CURRENT_LINE_FAILURE'],
      authenticated: true,
      body: {
        line: event
      }
    }))
  }
}
