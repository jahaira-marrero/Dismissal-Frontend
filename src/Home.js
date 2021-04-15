import React from "react";
// import NavBar from "./NavBar";
import Search from "./Search";
import { useHistory } from 'react-router-dom';


function Home({currentUser, handleSearch}) {
    const history = useHistory()
    
    return (
        <div>Welcome {currentUser?.name}
            <Search  handleSearch={handleSearch} />
            <button onClick={()=>history.push("/dismissalchangescontainer")}>Current Dismissal Changes</button>
            <button onClick={()=>history.push("/dismissalchangeform")}>Add Dismissal Change</button>
            <button>All Students</button>
            <button>Transportation</button>
        </div>
    )
}

export default Home;