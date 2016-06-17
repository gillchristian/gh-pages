import React from 'react'

const SearchInput = ({value, update, search}) => {
  const onChange = e => update(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    search(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className="SearchInput"
        value={value}
        type="text"
        onChange={onChange}/>
    </form>
  )
}

export default SearchInput
