import React from 'react';
import './index.css';

import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';

//components
import Search from '../Search';
import Nav from '../Nav';
import About from '../About';
import Home from '../Home';

const AppContent = () => {
  return (
    <div className="app-content">
      <BrowserRouter>
        <Nav />
        <div className="app-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/About" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppContent;
