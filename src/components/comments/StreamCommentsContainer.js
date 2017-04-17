import { connect } from 'react-redux'
import at from 'lodash/at'

import StreamComments from './StreamComments'

import { fetchCommentsForStream } from '../../actions/comment'

function mapStateToProps (state, ownProps) {
  const stream = state.stream[ownProps.streamId]
  const isLoggedIn = !!state.auth.userId

  if (!stream) return { comments: [] }

  const comments = at(state.comment, stream.comments || [])

  return {
    comments,
    isLoggedIn
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(fetchCommentsForStream(ownProps.streamId))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamComments)
