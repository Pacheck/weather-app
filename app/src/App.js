import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

import './App.css';
import AppContent from './components/app-content';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {isLogged ? <h2>IsLogged!</h2> : <p>Not logged</p>}
      {/* <AppContent /> */}
    </div>
  );
}

export default App;
