import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/grid">Grid</NavLink>
          </li>
          <li>
            <NavLink to="/user-table">User Table</NavLink>
          </li>
          <li>
            <NavLink to="/regi">Sign Up a User</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
