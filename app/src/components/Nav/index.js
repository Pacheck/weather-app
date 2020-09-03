import React, { useState } from 'react';
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
    return key
      ? {
          color: 'rgba(19, 98, 200, 0.835)',
        }
      : { color: '#fff' };
  }

  return (
    <ul className="nav-content">
      <Link
        to="/"
        style={setColorTab(home)}
        onClick={() => handlerTabs('Home')}
      >
        Home
      </Link>

      <Link
        className="search"
        to="/Search"
        style={setColorTab(search)}
        onClick={() => handlerTabs('Search')}
      >
        Search
      </Link>

      <Link
        to="/About"
        style={setColorTab(about)}
        onClick={() => handlerTabs('About')}
      >
        About
      </Link>
    </ul>
  );
};

export default Nav;
