import {connect} from 'react-redux'

import {updateSearchField} from '../../actions/search'

import {fetchRepos} from '../../actions/repos'

import Search from '../../components/search-bar/Search'

const mapStateToProps = state => (
  {
    value: state.search.user
  }
)

const mapDispatchToProps = {
  update: updateSearchField,
  search: fetchRepos
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
