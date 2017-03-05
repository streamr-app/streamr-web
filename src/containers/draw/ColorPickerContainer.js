import { connect } from 'react-redux'
import values from 'lodash/values'
import sortBy from 'lodash/sortBy'

import { setColor } from '../../actions/colors'

import ColorPicker from '../../components/draw/ColorPicker'

function mapStateToProps (state, ownProps) {
  const sortedColors = sortBy(values(state.drawing.colors), 'order')

  return {
    selectedColor: state.drawing.currentColor,
    disabled: state.drawing.currentLine != null,
    colors: sortedColors
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSelectColor (colorId) {
      dispatch(setColor(colorId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)
