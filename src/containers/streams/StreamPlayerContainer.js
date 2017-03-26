import { connect } from 'react-redux'

import DrawViewContainer from '../../containers/draw/DrawViewContainer'

import { playStreamData } from '../../actions/streamPlaying'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  const streamData = ownProps.streamData

  dispatch(playStreamData(streamData))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawViewContainer)
