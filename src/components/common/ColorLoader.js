import { connect } from 'react-redux'

import { loadColors } from '../../actions/colors'

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadColors())

  return {}
}

export default connect(null, mapDispatchToProps)(() => null)
