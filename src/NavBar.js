import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="NavBar">
            {/* <NavLink>
                <button>Home</button>
            </NavLink> */}
            <NavLink to="/transportationform">
                <button>Transportation Form</button>
            </NavLink>
            {/* <NavLink>
                <button>Search</button>
            </NavLink> */}


        </div>
    )
}


export default NavBar;