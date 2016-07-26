import {connect} from 'react-redux'

import {updateSearchField} from '../../actions/search'

import Search from '../../components/search-bar/Search'

const mapStateToProps = state => (
  {
    value: state.search.value
  }
)

const mapDispatchToProps = {
  update: updateSearchField
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
