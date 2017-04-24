import { connect } from 'react-redux'

import StreamRenderer from './StreamRenderer'

function mapStateToProps (state, ownProps) {
  const {
    thicknesses,
    thicknessId,
    currentEvent
  } = state.recording

  const currentColor = (state.color[state.recording.colorId] || {}).hex
  const currentThickness = thicknesses[thicknessId]

  return {
    currentEvent,
    currentColor,
    currentThickness
  }
}

export default connect(mapStateToProps)(StreamRenderer)
