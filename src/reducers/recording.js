import update from 'immutability-helper'
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
      return update(state, { colorId: { $set: action.payload } })

    case 'SET_THICKNESS':
      return update(state, { thicknessId: { $set: action.payload } })

    case 'START_STREAM':
      return update(state, { recordingStarted: { $set: true } })

    case 'LINE_START':
      return update(state, {
        currentEvent: {
          $set: {
            time,
            type: 'line',
            lineId: state.eventCount + 1,
            colorId: state.colorId,
            thickness: state.thicknesses[state.thicknessId],
            points: [ { ...action.payload, time } ]
          }
        }
      })

    case 'POINT_CREATE':
      return update(state, {
        currentEvent: {
          points: { $push: [{ ...action.payload, time }] }
        }
      })

    case 'UNDO_LINE':
      if (state.undoHistory.length === 0) {
        return state
      }

      let lineId = last(state.undoHistory)

      return update(state, {
        currentEvent: { $set: { time, type: 'undo', lineId } },
        undoHistory: { $splice: [[0, -1]] }
      })

    case 'CLEAR_SCREEN':
      return state(update, {
        undoHistory: { $set: [] },
        currentEvent: { $set: { time, type: 'clear' } }
      })

    case 'EVENT_END':
      let lastEvent = state.currentEvent

      if (!lastEvent) return state

      return update(state, {
        undoHistory: { $apply: (value) => (
          lastEvent.type === 'line'
            ? value.concat([ lastEvent.lineId ])
            : value
        )},
        currentEvent: { $set: null },
        eventCount: { $apply: (value) => value + 1 }
      })

    case 'CREATE_STREAM_SUCCESS':
      return update(state, {
        currentStreamId: { $set: action.payload.result.stream[0] }
      })

    case 'END_STREAM_REQUEST':
      return update(state, {
        recordingStopped: { $set: true }
      })

    case 'END_STREAM_SUCCESS':
      return update(state, { $set: initialState })

    case 'AUDIO_READY':
      return update(state, {
        recordingStarted: { $set: false },
        recording: { $set: true },
        streamStart: { $set: performance.now() }
      })

    case 'AUDIO_UNAVAILABLE':
    case 'RECORDING_SERVICE_UNAVAILABLE':
      return update(state, {
        error: { $set: action.type }
      })
  }

  return state
}

/* global performance */
