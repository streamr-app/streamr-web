import { connect } from 'react-redux'

import StreamPlayer from './StreamPlayer'

import { playStreamData } from '../../actions/streamPlaying'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  const streamData = ownProps.streamData

  dispatch(playStreamData(streamData))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamPlayer)
