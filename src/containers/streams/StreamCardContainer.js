import { connect } from 'react-redux'

import StreamCard from '../../components/streams/StreamCard'

function mapStateToProps (state, ownProps) {
  const stream = state.stream[ownProps.streamId]
  const user = state.user[stream.user.id]

  return {
    stream,
    user
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamCard)
