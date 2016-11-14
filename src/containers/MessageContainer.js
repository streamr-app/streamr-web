import { connect } from 'react-redux'

import Message from '../components/Message'

function mapStateToProps (state, ownProps) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Message)
