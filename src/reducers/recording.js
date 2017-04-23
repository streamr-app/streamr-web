import last from 'lodash/last'

const initialState = {
  eventCount: 0,
  currentEvent: null,
  currentColor: 1,
  thicknesses: [2, 3, 4, 6, 8],
  brushThickness: 2,
  currentStreamId: null,
  recording: false,
  undoHistory: [],
  streamEnding: false,
  audioAPIsUnavailable: false
}

export default function (
  state = initialState,
  action
) {
  var time = 0

  if (!isNaN(state.streamStart)) {
    time = Math.round(performance.now() - state.streamStart)
  }

  switch (action.type) {
    case 'CURSOR_MOVE':
      break
    case 'LINE_START':
      return {
        ...state,
        currentEvent: {
          time,
          type: 'line',
          lineId: state.eventCount + 1,
          colorId: state.currentColor,
          thickness: state.thicknesses[state.brushThickness],
          points: [ { ...action.payload, time } ]
        }
      }
    case 'EVENT_END':
      if (!state.currentEvent) return state

      return {
        ...state,
        undoHistory: state.currentEvent.type === 'line'
          ? state.undoHistory.concat([ state.currentEvent.lineId ])
          : state.undoHistory,
        eventCount: state.eventCount + 1,
        currentEvent: null
      }
    case 'POINT_CREATE':
      return {
        ...state,
        currentEvent: {
          ...state.currentEvent,
          points: state.currentEvent.points.concat([
            { ...action.payload, time }
          ])
        }
      }
    case 'UNDO_LINE':
      let lineId = last(state.undoHistory)
      if (!lineId) return state

      if (state.undoHistory.length === 0) {
        return state
      }

      return {
        ...state,
        currentEvent: { time, type: 'undo', lineId },
        undoHistory: state.undoHistory.slice(0, -1)
      }
    case 'CLEAR_SCREEN':
      return {
        ...state,
        undoHistory: [],
        currentEvent: { time, type: 'clear' }
      }
    case 'COLOR_SET':
      return {
        ...state,
        currentColor: action.payload
      }
    case 'SET_THICKNESS':
      return {
        ...state,
        brushThickness: action.payload
      }
    case 'SET_CURRENT_STREAM':
      return {
        ...state,
        currentStreamId: action.payload,
        recording: true
      }
    case 'AUDIO_READY':
      return {
        ...state,
        streamStart: performance.now()
      }
    case 'END_STREAM_REQUEST':
      return {
        ...state,
        streamEnding: true
      }
    case 'END_STREAM_SUCCESS':
      return {
        ...state,
        ...initialState
      }

    case 'AUDIO_UNAVAILABLE':
      return {
        ...state,
        error: true,
        audioAPIsUnavailable: true
      }
  }

  return state
}

/* global performance */
