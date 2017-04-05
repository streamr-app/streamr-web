import { connect } from 'react-redux'
import { reduxForm, reset as resetForm } from 'redux-form'

import { createCommentForStream } from '../../actions/comment'

import CommentForm from '../../components/comments/CommentForm'

function validate (values) {
  const errors = {}

  if (!values.body) {
    errors.body = 'Comment body is required.'
  }

  return errors
}

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      return dispatch(createCommentForStream(ownProps.streamId, data))
        .then(() => dispatch(resetForm('newComment')))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'newComment',
    validate
  })(CommentForm)
)
