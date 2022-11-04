import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/about">About</Link>
          </li>
          <li>
              <Link to="/games">Games</Link>
          </li>
          <li>
              <Link to="/selector">Game Selector</Link>
          </li>
          <li>
              <Link to="/groups">Groups</Link>
          </li>
          <li>
              <Link to="/group/new">New Group</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
          <li>
              <Link to="/register">Register</Link>
          </li>
          <li>
              <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;