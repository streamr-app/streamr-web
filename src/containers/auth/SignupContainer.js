import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { push } from 'react-router-redux'
import { createUser } from '../../actions/users'

import { EMAIL_REGEX } from '../../utils/regexes'

import Signup from '../../components/auth/Signup'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      dispatch(createUser(data))
        .then(() => dispatch(push('/')))
    }
  }
}

function validate (values) {
  const errors = {}

  if (!values.name) {
    errors.name = 'Surely you must have a name.'
  }

  if (!values.email) {
    errors.email = 'You must provide an email.'
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "This email address doesn't seem valid."
  }

  if (!values.password) {
    errors.password = 'You need a password. Make it good!'
  }

  return errors
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'signup',
    validate
  })(Signup)
)
