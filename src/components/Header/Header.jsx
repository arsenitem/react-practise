import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
function Header(props) {
    return(
        <header className="header">
        <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png"></img>
        <div className="loginBlock">
        {props.isAuth ? "Hello, " + props.login: <NavLink to="/login">Log in</NavLink>}
          
        </div>
      </header>
    );
}

export default Header;