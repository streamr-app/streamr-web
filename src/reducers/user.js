import update from 'immutability-helper'

export default function (state = {}, action) {
  switch (action.type) {
    case 'CURRENT_USER_SUCCESS': {
      const userId = action.payload.result.user[0]
      const user = action.payload.entities.user[userId]

      return update(state, { [userId]: { $set: user } })
    }

    case 'USER_STREAMS_SUCCESS': {
      const userId = action.payload.userId

      return update(state, {
        [userId]: {
          streams: { $set: action.payload.result.stream }
        }
      })
    }

    case 'LOGOUT': {
      return { }
    }

    case 'SUBSCRIBE_SUCCESS': {
      return update(state, {
        [action.payload.userId]: {
          currentUserSubscribed: { $set: true }
        }
      })
    }

    case 'UNSUBSCRIBE_SUCCESS': {
      return update(state, {
        [action.payload.userId]: {
          currentUserSubscribed: { $set: false }
        }
      })
    }
  }

  return state
}
