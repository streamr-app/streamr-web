import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { login } from '../../actions/auth'
import { push } from 'react-router-redux'

import Me from './Me'

function validate (values) {
  const errors = {}

  if (!values.name) {
    errors.name = 'Surely you have a name.'
  }

  if (!values.email) {
    errors.email = 'How will we spam you if this is blank? (just kidding)'
  }

  return errors
}

function mapStateToProps (state, ownProps) {
  const userId = state.auth.userId
  const user = state.user[userId]

  return {
    user,
    initialValues: {
      name: user.name,
      email: user.email
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      // TODO
      console.log('Update user', data)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'me',
    validate
  })(Me)
)
