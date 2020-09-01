import React, { useState } from 'react';
import './index.css';

import { Link } from 'react-router-dom';

const Nav = () => {
  const [activeTabController, setActiveTabController] = useState({
    home: false,
    search: false,
    about: false,
  });

  const [browserUrl, setBrowserUrl] = useState('');

  const URL = window.location.href.split('/')[3];

  console.log(URL);

  const { home, search, about } = activeTabController;

  function handlerTabs(type) {
    if (type === 'home') {
      setActiveTabController({ home: true, search: false, about: false });
    } else if (type === 'search') {
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
      <li className="home" onClick={(e) => handlerTabs('home')}>
        <Link to="/" style={setColorTab(home)}>
          Home
        </Link>
      </li>
      <li className="search" onClick={(e) => handlerTabs('search')}>
        <Link to="/Search" style={setColorTab(search)}>
          Search
        </Link>
      </li>
      <li className="about" onClick={(e) => handlerTabs('about')}>
        <Link to="/About" style={setColorTab(about)}>
          About
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
