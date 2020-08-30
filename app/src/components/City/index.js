import React from 'react';
// import './index.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';

const API_KEY = 'a872c03613ce4a71b1f265af24764da0';

const API_KEY2 = '679669d1038ec093aab3530bd83cbbce';

const City = () => {
  useEffect(() => {
    // axiosGetApi();
  }, []);

  const axiosGetApi = async () => {
    const response = await Axios.get(
      `https://api.weatherbit.io/v2.0/current?city=Raleigh&key=${API_KEY}`
    );

    console.log(response);
  };

  return <span>city</span>;
};

export default City;
