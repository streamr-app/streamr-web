// @flow

import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Signup from '../../components/auth/Signup'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      console.log(data)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'signup'
  })(Signup)
)
