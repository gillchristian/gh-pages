import React from 'react'

import Search from '../../containers/search-bar/Search.container'

const SearchBar = () => (
  <div className="SearchBar">
    <span className="SearchBar-label">Type the Github user you want to find:</span>
    <Search />
  </div>
)

export default SearchBar
