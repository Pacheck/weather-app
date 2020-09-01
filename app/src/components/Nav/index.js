import React, { useEffect, useState } from 'react';
import './index.css';

import { Link } from 'react-router-dom';

const Nav = () => {
  const URL = window.location.href.split('/')[3];
  const parseURL = URL === '' ? 'Home' : URL;
  const [activeTabController, setActiveTabController] = useState({
    home: parseURL === 'Home' ? true : false,
    search: parseURL === 'Search' ? true : false,
    about: parseURL === 'About' ? true : false,
  });
  const { home, search, about } = activeTabController;

  function handlerTabs(type) {
    if (type === 'Home') {
      setActiveTabController({ home: true, search: false, about: false });
    } else if (type === 'Search') {
      setActiveTabController({ home: false, search: true, about: false });
    } else {
      setActiveTabController({ home: false, search: false, about: true });
    }
  }

  function setColorTab(key) {
    return key ? { color: 'rgba(19, 98, 200, 0.835)' } : { color: '#fff' };
  }

  return (
    <ul className="nav-content">
      <li onClick={() => handlerTabs('Home')}>
        <Link to="/" style={setColorTab(home)}>
          Home
        </Link>
      </li>
      <li onClick={() => handlerTabs('Search')}>
        <Link to="/Search" style={setColorTab(search)}>
          Search
        </Link>
      </li>
      <li onClick={() => handlerTabs('About')}>
        <Link to="/About" style={setColorTab(about)}>
          About
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
