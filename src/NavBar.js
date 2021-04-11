import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="NavBar">
            <NavLink to="/">
                <button>Home Page</button>
            </NavLink>
            <NavLink to="/dismissalchanges">
                <button >Dismissal Changes</button>
            </NavLink>
            <NavLink to="/dismissalchangeform">
                <button >Request Change</button>
            </NavLink>
            <NavLink to="/search">
                <button>Search Student</button>
            </NavLink>
            <NavLink to="/studentscards">
                <button>All Students</button>
            </NavLink>
        </div>
    )
}


export default NavBar;