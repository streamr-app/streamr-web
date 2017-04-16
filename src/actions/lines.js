import { createResource } from './index'

export function persistCurrentLine () {
  return (dispatch, getState) => {
    const line = getState().drawing.currentLine

    if (!line) return

    dispatch(createResource({
      url: `/streams/${getState().drawing.currentStreamId}/add_line`,
      types: ['PERSIST_CURRENT_LINE_REQUEST', 'PERSIST_CURRENT_LINE_SUCCESS', 'PERSIST_CURRENT_LINE_FAILURE'],
      authenticated: true,
      body: {
        line
      }
    }))
  }
}
