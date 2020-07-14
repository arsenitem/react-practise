import React from 'react';
import './Nav.css'
function Nav() {
    return(
        <nav className="nav">
        <div className="menuItem">
          <a href="/profile">Profile</a>      
        </div>
        <div className="menuItem">
          <a href="/messages">Messages</a>         
        </div>
        <div className="menuItem">
          <a href="/news">News</a>
        </div>
        <div className="menuItem">
          <a href="/music">Music</a>
        </div>
        <div className="menuItem">
          <a href="/settings">Settings</a>
        </div>
      </nav>
    );
}

export default Nav;