import React, { PropTypes } from 'react'
import {Link} from 'react-router'

const Search = ({value, update}) => {
  const onChange = e => update(e.target.value)

  return (
    <form className="Form">
      <input
        className="Search"
        value={value}
        type="text"
        onChange={onChange}
        autoFocus
      />
      <Link to={`/${value}` || '/'}  className="no-style-link">
        <input
          className="Submit pointer"
          type="submit"
          value="search"
        />
      </Link>
    </form>
  )
}

Search.propTypes = {
  value: PropTypes.string,
  update: PropTypes.func,
  search: PropTypes.func
}

export default Search
