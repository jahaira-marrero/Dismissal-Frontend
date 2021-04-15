import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NavBar({handleSearch}) {

    return (
        <div className="NavBar">
            <NavLink to="/login">
                <Button size="sm">Login</Button>
            </NavLink>
            <NavLink to="/">
                <Button size="sm">Home Page</Button>
            </NavLink>
            <NavLink to="/dismissalchanges">
                <Button size="sm">Dismissal Changes</Button>
            </NavLink>
            <NavLink to="/dismissalchangeform">
                <Button size="sm">Request Change</Button>
            </NavLink>
            <NavLink to="/students">
                <Button size="sm">All Students</Button>
            </NavLink>
            <NavLink to="/transportations">
                <Button size="sm"> Transportation</Button>
                </NavLink>
            <NavLink to="/studentupdateform">
                <Button size="sm"> Update Student Information</Button>
            </NavLink>
            <Search  handleSearch={handleSearch} />
        </div>
    )
}


export default NavBar;