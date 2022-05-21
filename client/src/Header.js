import React from 'react'

const Header = ({search, setSearch}) => {
  return (
    <div>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(w) => setSearch(w.target.value)}
      />
    </div>
  )
}

export default Header