import {connect} from 'react-redux'

import {updateSearchField} from '../../actions/search'

import {fetchUser} from '../../actions/user'

import Search from '../../components/search-bar/Search'

const mapStateToProps = state => (
  {
    value: state.search.user
  }
)

const mapDispatchToProps = {
  update: updateSearchField,
  search: fetchUser
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
