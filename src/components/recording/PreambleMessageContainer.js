import { connect } from 'react-redux'

import PreambleMessage from './PreambleMessage'

function mapStateToProps (state, ownProps) {
  return {
    visible: state.recording.currentStreamId &&
      !state.recording.eventCount &&
      !state.recording.currentEvent &&
      !state.recording.recording &&
      !state.recording.error
  }
}

export default connect(mapStateToProps)(PreambleMessage)
