import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function NavBar({handleSearch}) {


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
            <NavLink to="/studentcards">
                <button>All Students</button>
            </NavLink>
            <NavLink to="/transportations">
                <button> Transportation</button>
            <NavLink to="/studentupdateform">
                <button> Update Student Information</button>
            </NavLink>
            </NavLink>
            <Search handleSearch={handleSearch}/>
        </div>
    )
}


export default NavBar;