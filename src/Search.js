import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function Search({handleSearch}) {
  const [currentSearch, setCurrentSearch] = useState("")
  const history = useHistory()
  
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(currentSearch);
    // history.push(`/students/:id`)
  }

  return (
    <form  onSubmit={handleSubmit}>
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