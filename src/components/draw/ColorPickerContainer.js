import { connect } from 'react-redux'
import values from 'lodash/values'
import sortBy from 'lodash/sortBy'

import { setColor, setColorByOrder } from '../../actions/colors'

import ColorPicker from './ColorPicker'

function mapStateToProps (state, ownProps) {
  const sortedColors = sortBy(values(state.color), 'order')

  return {
    selectedColor: state.drawing.currentColor,
    disabled: state.drawing.currentEvent != null,
    colors: sortedColors
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSelectColor (colorId) {
      dispatch(setColor(colorId))
    },

    onSelectColorOrder (colorOrder) {
      dispatch(setColorByOrder(colorOrder))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)
