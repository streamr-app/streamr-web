import { connect } from 'react-redux'
import at from 'lodash/at'

import SearchResults from './SearchResults'
import queryString from 'query-string'

import { searchForStreams } from '../../actions/stream'

function mapStateToProps (state, ownProps) {
  const streams = at(state.stream, state.stream.searchResults || [])

  return {
    streams
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  const search = getSearchFromLocation(ownProps.location)

  dispatch(searchForStreams(search))

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)

function getSearchFromLocation (location) {
  return queryString.parse(location.search).query
}
