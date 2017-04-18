import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import { fetchUser } from '../../actions/users'

import queryString from 'query-string'

import { resetPassword } from '../../actions/auth'

import PasswordReset from './PasswordReset'

function validate (values) {
  const errors = {}

  if (!values.password || values.password.length < 8) {
    errors.password = "Don't be shy."
  }

  return errors
}

function mapStateToProps (state, ownProps) {
  const token = getToken(ownProps.location)
  const userJSON = parseToken(token)

  const user = state.user[userJSON.user_id]

  return {
    user,
    initialValues: {
      token
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const token = getToken(ownProps.location)
  const userJSON = parseToken(token)

  dispatch(fetchUser(userJSON.user_id))

  return {
    onSubmit (data) {
      return dispatch(resetPassword(data))
        .then((action) => {
          if (!action.type.includes('SUCCESS')) {
            throw new SubmissionError({ _error: 'Your token appears to be invalid.' })
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
    form: 'reset-password',
    validate
  })(PasswordReset)
)

function getToken (location) {
  const queryFragment = location.search
  return queryString.parse(queryFragment).token
}

function parseToken (token) {
  return JSON.parse(atob(token.split('.')[1]))
}

/* global atob */
