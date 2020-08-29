import React from 'react';
import './index.css';

import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';

//components
import Search from '../Search';
import Nav from '../Nav';

const AppContent = () => {
  return (
    <div className="app-content">
      <Nav />
      <BrowserRouter>
        <Switch>
          {/* <Link to="/Search">Search city</Link> */}
          <Route path="/" exact />
          <Route path="/Search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppContent;
