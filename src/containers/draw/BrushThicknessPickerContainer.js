import { connect } from 'react-redux'

import BrushThicknessPicker from '../../components/draw/BrushThicknessPicker'

import { setThickness } from '../../actions/thickness'

function mapStateToProps (state, ownProps) {
  const currentColor = (state.color[state.drawing.currentColor] || {}).normal

  return {
    currentThickness: state.drawing.brushThickness,
    currentColor
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSelectThickness (thickness) {
      dispatch(setThickness(thickness))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrushThicknessPicker)
