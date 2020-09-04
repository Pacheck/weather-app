import React from 'react';
import './index.css';

import { useState } from 'react';

//components
import City from '../City';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [showCity, setShowCity] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
            placeholder={isFocused ? '' : 'type a name'}
            value={userInput}
            autoFocus
            onChange={(e) => setUserInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={
              isFocused || userInput
                ? { borderColor: 'transparent' }
                : { border: '2px solid red' }
            }
          />
          <button onClick={handleSearchCity} disabled={!userInput}>
            Find
          </button>
        </div>
      )}
      {showCity && (
        <City citie={userInput} handleSearchCity={handleSearchCity} />
      )}
    </>
  );
};

export default Search;
