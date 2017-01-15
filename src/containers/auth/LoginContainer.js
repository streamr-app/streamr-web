import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { login } from '../../actions/auth'
import { push } from 'react-router-redux'

import Login from '../../components/auth/Login'

function validate (values) {
  const errors = {}

  if (!values.email) {
    errors.email = "Don't be shy."
  }

  if (!values.password) {
    errors.password = 'Make sure to enter your password.'
  }

  return errors
}

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      dispatch(login(data))
        .then(() => dispatch(push('/')))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'login',
    validate
  })(Login)
)
