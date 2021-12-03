import React from "react";
import './navbar.css';

import { NavLink } from 'react-router-dom';

function NavBar() {
    return (

       <div id="Navbar-Container">

           <div id="Column1" className="Navbar-Brand">
           <NavLink to="/">
                <h1>Lo-oK</h1>
           </NavLink>
           </div>

            <div id="Column2">
                <form className="Form-Container">
                    <input placeholder="Search" type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>

            <div id="Column3" className="Login-Signup">
                <button>Profile</button>
            </div>

       </div>

    )
}

export default NavBar;
