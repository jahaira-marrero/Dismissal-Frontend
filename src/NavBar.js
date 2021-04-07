import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="NavBar">
            <NavLink to="/">
                <button>Home Page</button>
            </NavLink>
            <NavLink to="/transportationform">
                <button >Request Change</button>
            </NavLink>
            <NavLink to="/search">
                <button>Search Student</button>
            </NavLink>
            <NavLink to="/studentscontainer">
                <button>All Students</button>
            </NavLink>
        </div>
    )
}


export default NavBar;