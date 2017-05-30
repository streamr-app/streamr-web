import { connect } from 'react-redux'

import { createStream } from '../../actions/stream'

import DrawView from './DrawView'

function mapStateToProps (state, ownProps) {
  return {
    recording: state.recording.recording
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(createStream({ title: 'Stream' }))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawView)
