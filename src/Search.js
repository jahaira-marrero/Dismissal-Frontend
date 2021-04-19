import React from "react";


function Search({handleSearch, search}) {

  function handleSubmit(e) {

    console.log(e.target.value)
    handleSearch(e.target.value);
  }

  return (
    <form  >
      <input
       className="Search-bar"
        type="text"
        id="search"
        placeholder="search student"
        value={search}
        onChange={handleSubmit}
      />
    </form>
  )
}

export default Search;