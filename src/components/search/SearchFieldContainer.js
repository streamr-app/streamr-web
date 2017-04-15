import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import queryString from 'query-string'

import SearchField from './SearchField'

import { push } from 'react-router-redux'

function mapStateToProps (state, ownProps) {
  return {
    initialValues: {
      search: queryString.parse(ownProps.location.search).query
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  if (!queryString.parse(ownProps.location.search).query) {
    dispatch(reset('search'))
  }

  return {
    onSubmit (data) {
      const search = data.search
      if (!search) return

      dispatch(push(`/search?query=${search.replace(' ', '+')}`))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'search'
  })(SearchField)
)
