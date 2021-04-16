import React from "react";
// import Search from "./Search";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function NavBar({setCurrentUser}) {

    function logout() {
        setCurrentUser(null);
    }

    return (
        <header>
            <NavLink to="/home">
                <Button size="sm">Home Page</Button> {" "}
            </NavLink>
            <NavLink to="/myprofile/:id">
                <Button size="sm">My Profile</Button> {" "}
            </NavLink>
            <NavLink to="/login">
            <Button size="sm" onClick={()=>logout} > Logout</Button> {" "}
            </NavLink>
            {/* <Search handleSearch={handleSearch} /> */}
        </header>
    )
}


export default NavBar;