import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import omit from 'lodash/omit'

import { updateMe } from '../../actions/users'
import { loadCurrentUser } from '../../actions/auth'

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
      email: user.email,
      image: user.imageUrl,
      colorPreference: user.colorPreference,
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  dispatch(loadCurrentUser())

  return {
    onSubmit (data) {
      if (!data.image || !data.image.includes('base64')) {
        data = omit(data, 'image')
      }

      return dispatch(updateMe(data))
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
