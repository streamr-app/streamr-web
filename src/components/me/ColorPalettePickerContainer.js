import { connect } from 'react-redux'
import values from 'lodash/values'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'

import { loadColors } from '../../actions/colors'

import ColorPalettePicker from './ColorPalettePicker'

function mapStateToProps (state, ownProps) {
  const allColors = sortBy(values(state.color), 'values')

  return {
    normalColors: map(allColors, 'normal'),
    deuteranopiaColors: map(allColors, 'deuteranopia'),
    protanopiaColors: map(allColors, 'protanopia'),
    tritanopiaColors: map(allColors, 'tritanopia')
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadColors())

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalettePicker)
