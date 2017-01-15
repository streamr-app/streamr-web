import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { login } from '../../actions/auth'
import { push } from 'react-router-redux'

import Login from '../../components/auth/Login'
import { SubmissionError } from 'redux-form'

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
      return dispatch(login(data))
        .then((action) => {
          if (action.type === 'LOGIN_SUCCESS') {
            dispatch(push('/'))
          } else {
            throw new SubmissionError({ _error: 'Incorrect email address or password.' })
          }
        })
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
