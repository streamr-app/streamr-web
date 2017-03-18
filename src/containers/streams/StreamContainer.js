import { connect } from 'react-redux'

import StreamView from '../../components/streams/StreamView'

function mapStateToProps (state, ownProps) {
  const streamSlug = ownProps.params.streamSlug
  
  return {
    streamSlug
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamView)
