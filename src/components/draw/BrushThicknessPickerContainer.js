import { connect } from 'react-redux'

import BrushThicknessPicker from './BrushThicknessPicker'

import { setThickness, increaseThickness, decreaseThickness } from '../../actions/thickness'

function mapStateToProps (state, ownProps) {
  const thicknesses = state.drawing.thicknesses
  const currentColor = (state.color[state.drawing.currentColor] || {}).hex

  return {
    thicknessId: state.drawing.brushThickness,
    currentColor,
    thicknesses
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSelectThickness (thicknessId) {
      dispatch(setThickness(thicknessId))
    },

    onIncreaseThickness () {
      dispatch(increaseThickness())
    },

    onDecreaseThickness () {
      dispatch(decreaseThickness())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrushThicknessPicker)
