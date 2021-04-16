import React, { useState } from "react";


function Search({handleSearch}) {
  const [currentSearch, setCurrentSearch] = useState("")
  
  
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(currentSearch);
  }

  return (
    <form  onChange={handleSubmit}>
      <input
       className="Search-bar"
        type="text"
        id="search"
        placeholder="search student"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search;