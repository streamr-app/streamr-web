import { connect } from 'react-redux'

import { setColor } from '../../actions/colors'

import ColorPicker from '../../components/drawing-board/ColorPicker'

function mapStateToProps (state, ownProps) {
  return {
    selectedColor: state.drawing.currentColor,
    visible: state.drawing.currentLine == null,
    colors: [
      { id: '1', normal: '#abb2bf', order: '1' },
      { id: '2', normal: '#e06c75', order: '2' },
      { id: '3', normal: '#d19a66', order: '3' },
      { id: '4', normal: '#98c379', order: '4' },
      { id: '5', normal: '#61afef', order: '5' },
      { id: '6', normal: '#c678dd', order: '6' }
    ]
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
