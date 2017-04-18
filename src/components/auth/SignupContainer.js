import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { push } from 'react-router-redux'
import { checkEmailAvailability, createUser } from '../../actions/users'

import { EMAIL_REGEX } from '../../utils/regexes'

import Signup from './Signup'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      return dispatch(createUser(data))
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

function asyncValidate (object, dispatch) {
  return dispatch(checkEmailAvailability(object.email)).then((action) => {
    if (!action.payload.email_available) {
      /* eslint-disable no-throw-literal */
      throw { email: 'This email is currently being used.' }
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'signup',
    validate,
    asyncValidate
  })(Signup)
)
