import { createResource } from './index'

export function persistCurrentLine (streamId) {
  return (dispatch, getState) => {
    const line = getState().drawing.currentLine

    dispatch(createResource({
      url: `/streams/${streamId}/add_line`,
      types: ['PERSIST_CURRENT_LINE_REQUEST', 'PERSIST_CURRENT_LINE_SUCCESS', 'PERSIST_CURRENT_LINE_FAILURE'],
      authenticated: true,
      body: {
        line
      }
    }))
  }
}
