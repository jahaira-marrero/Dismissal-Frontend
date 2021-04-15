import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NavBar() {

    return (
        <div className="NavBar">
          
            <NavLink to="/myprofile/:id">
                <Button size="sm">My Profile</Button>
            </NavLink>

            <NavLink to="/">
                <Button size="sm">Home Page</Button>
            </NavLink>

            {/* <NavLink to="/dismissalchanges">
                <Button size="sm">Dismissal Changes</Button>
            </NavLink> */}

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

           
        </div>
    )
}


export default NavBar;