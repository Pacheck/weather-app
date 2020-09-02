import React from 'react';
import './index.css';

import { useState, useEffect } from 'react';

//components
import City from '../City';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [showCity, setShowCity] = useState(false);

  function handleSearchCity() {
    if (userInput) {
      setShowCity(!showCity);
    }
    console.log(userInput);
  }

  return (
    <>
      {!showCity && (
        <div className="search-container">
          <label>Search for cities</label>
          <input
            placeholder="type a name"
            value={userInput}
            autoFocus
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={handleSearchCity}>Find</button>
        </div>
      )}
      {showCity && (
        <City citie={userInput} handleSearchCity={handleSearchCity} />
      )}
    </>
  );
};

export default Search;
