import React from 'react'

import SearchInput from '../../containers/search-bar/SearchInput.container'

const SearchBar = () => (
  <div className="SearchBar">
    <span className="SearchBar-label">Type the Github user you want to find:</span>
    <SearchInput />
  </div>
)

export default SearchBar
