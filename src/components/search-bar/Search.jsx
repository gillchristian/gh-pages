import React from 'react'

const Search = ({value, update, search}) => {
  const onChange = e => update(e.target.value)
  const submit = e => {
    e.preventDefault()
    search(value)
  }

  return (
    <form onSubmit={submit} className="Form">
      <input
        className="Search"
        value={value}
        type="text"
        onChange={onChange}/>
      <input
        className="Submit"
        type="submit"
        value="search"
        onClick={submit}/>
    </form>
  )
}

export default Search
