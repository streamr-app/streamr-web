import { connect } from 'react-redux'
import { reduxForm, SubmissionError } from 'redux-form'

import { login } from '../../actions/auth'
import { push } from 'react-router-redux'

import PublishStreamView from './PublishStreamView'

function validate (values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Don't be afraid of commitment."
  }

  if (!values.description) {
    errors.description = "Listen, friend. I'm sick of you leaving things blank."
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
          if (action.type.includes('SUCCESS')) {
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
    form: 'publishStream',
    validate
  })(PublishStreamView)
)
