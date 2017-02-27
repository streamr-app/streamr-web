import { connect } from 'react-redux'
import values from 'lodash/values'
import sortBy from 'lodash/sortBy'

import { setColor } from '../../actions/colors'

import ColorPicker from '../../components/draw/ColorPicker'

function mapStateToProps (state, ownProps) {
  return {
    selectedColor: state.drawing.currentColor,
    visible: state.drawing.currentLine == null,
    colors: sortBy(values(state.drawing.colors), 'order')
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
