import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Login from '../../components/auth/Login'

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit (data) {
      console.log(data)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'login'
  })(Login)
)
