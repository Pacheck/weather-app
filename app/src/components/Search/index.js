import React from 'react';
import './index.css';

import { useState, useEffect } from 'react';

const Search = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <div className="search-container">
      <label>Search for cities</label>
      <input placeholder="type a name" />
      <button>Send</button>
    </div>
  );
};

export default Search;
