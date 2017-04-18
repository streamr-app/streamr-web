import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { requestPasswordReset } from '../../actions/auth'

import ForgotPassword from './ForgotPassword'

function validate (values) {
  const errors = {}

  if (!values.email) {
    errors.email = "Don't be shy."
  }

  return errors
}

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit ({ email }) {
      return dispatch(requestPasswordReset(email))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'forgot',
    validate
  })(ForgotPassword)
)
