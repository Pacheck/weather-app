import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav-content">
      <li>
        <Link to="/Logo">Logo</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
  );
};

export default Nav;
