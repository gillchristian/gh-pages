import {connect} from 'react-redux'

import {updateSearchField} from '../../actions/search'

import {fetchUser} from '../../actions/user'

import SearchInput from '../../components/search-bar/SearchInput'

const mapStateToProps = state => (
  {
    value: state.search.user
  }
)

const mapDispatchToProps = {
  update: updateSearchField,
  search: fetchUser
}

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)

export default SearchInputContainer
