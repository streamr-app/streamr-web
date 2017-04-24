import isNumber from 'lodash/isNumber'
import last from 'lodash/last'

const initialState = {
  currentStreamId: null,
  streamStart: null,

  eventCount: 0,
  currentEvent: null,

  colorId: 1,

  thicknesses: [2, 3, 4, 6, 8],
  thicknessId: 2,

  recording: false,
  recordingStarted: false,
  recordingStopped: false,
  error: null,

  undoHistory: []
}

export default function (
  state = initialState,
  action
) {
  var time = -1

  if (isNumber(state.streamStart)) {
    time = Math.round(performance.now() - state.streamStart)
  }

  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        colorId: action.payload
      }

    case 'SET_THICKNESS':
      return {
        ...state,
        thicknessId: action.payload
      }

    case 'START_STREAM':
      return {
        ...state,
        recordingStarted: true
      }

    case 'LINE_START':
      return {
        ...state,
        currentEvent: {
          time,
          type: 'line',
          lineId: state.eventCount + 1,
          colorId: state.colorId,
          thickness: state.thicknesses[state.thicknessId],
          points: [ { ...action.payload, time } ]
        }
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
      if (state.undoHistory.length === 0) {
        return state
      }

      let lineId = last(state.undoHistory)

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

    case 'CREATE_STREAM_SUCCESS':
      return {
        ...state,
        currentStreamId: action.payload.result.stream[0]
      }

    case 'END_STREAM_REQUEST':
      return {
        ...state,
        recordingStopped: true
      }

    case 'END_STREAM_SUCCESS':
      return {
        ...state,
        ...initialState
      }

    case 'AUDIO_READY':
      return {
        ...state,
        recordingStarted: false,
        recording: true,
        streamStart: performance.now()
      }

    case 'AUDIO_UNAVAILABLE':
    case 'RECORDING_SERVICE_UNAVAILABLE':
      return {
        ...state,
        error: action.type
      }
  }

  return state
}

/* global performance */
