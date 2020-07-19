import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css'
function Nav() {
    return(
        <nav className="nav">
        <div className="menuItem">
          <NavLink to="/profile">Profile</NavLink>      
        </div>
        <div className="menuItem">
          <NavLink to="/messages">Messages</NavLink>         
        </div>
        <div className="menuItem">
          <NavLink to="/users">Users</NavLink>         
        </div>
        <div className="menuItem">
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="menuItem">
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="menuItem">
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </nav>
    );
}

export default Nav;