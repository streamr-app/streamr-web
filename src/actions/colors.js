import { fetch } from './index'
import find from 'lodash/find'
import values from 'lodash/values'

export function loadColors () {
  return (dispatch, getState) => {
    dispatch(fetch({
      url: 'colors',
      authenticated: 'try',
      types: ['COLORS_REQUEST', 'COLORS_SUCCESS', 'COLORS_FAILURE']
    }))
      .then(() => dispatch(setColorByOrder(1)))
  }
}

export function setColor (colorId) {
  return {
    type: 'COLOR_SET',
    payload: colorId.toString()
  }
}

export function setColorByOrder (colorOrder) {
  return (dispatch, getState) => {
    const colors = values(getState().color)
    var color = find(colors, { order: colorOrder })
    color && dispatch(setColor(color.id))
  }
}
