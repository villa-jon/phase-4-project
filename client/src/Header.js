import React from 'react'

const Header = ({search, setSearch}) => {

  return (
    <div>
      <input
        type="text"
        id="search"
        value={search}
        onChange={setSearch}
      />
    </div>
  )
}

export default Header