import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function NavBar({setCurrentUser, handleSearch}) {

    function logout() {
        setCurrentUser(null);
    }

    return (
        <header style={{background: "#212529", height: "3rem", justifyContent: "center", lineHeight: "4"}}>
            <NavLink to="/home">
                <Button onClick={()=>handleSearch("")} size="sm">Home Page</Button> {" "} 
            </NavLink>
            <NavLink to="/myprofile/:id">
                <Button size="sm">My Profile</Button> {" "}
            </NavLink>
            <NavLink to="/login">
            <Button size="sm" onClick={()=>logout} > Logout</Button> {" "}
            </NavLink>
        </header>
    )
}


export default NavBar;