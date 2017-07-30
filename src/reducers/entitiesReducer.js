import update from 'immutability-helper'
import fromPairs from 'lodash/fromPairs'

const entities = [
  'comment',
  'color',
  'stream',
  'topic',
  'user'
]

export default (state = {}, action) => {
  entities.forEach((entityName) => {
    state = {
      ...state,
      [entityName]: updatedEntitySlice(state, entityName, action)
    }
  })

  return state
}

export const stubbedEntityReducers = fromPairs(
  entities.map((entityName) => [ entityName, (state = {}, action) => state ])
)

function updatedEntitySlice (state, entityName, action = {}) {
  if (action.payload && action.payload.entities && action.payload.entities[entityName]) {
    const slice = action.payload.entities[entityName]

    Object.keys(slice).forEach(entityId => {
      var command = '$set'

      if (state[entityName][entityId]) {
        command = '$merge'
      }

      state = update(
        state,
        {
          [entityName]: {
            [entityId]: {
              [command]: slice[entityId]
            }
          }
        }
      )
    })
  }

  return state[entityName]
}
