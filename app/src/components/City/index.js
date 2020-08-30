import React from 'react';
// import './index.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';

const API_KEY = 'a872c03613ce4a71b1f265af24764da0';

const API_KEY2 = '679669d1038ec093aab3530bd83cbbce';

const City = (props) => {
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    axiosGetApi();
  }, []);

  const axiosGetApi = async () => {
    const response = await Axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${props.citie}&key=${API_KEY}`
    );

    setCityName(response.data.data[0].city_name);
    setTemperature(response.data.data[0].temp);
    console.log(response);
  };

  return (
    <div>
      <span>City name: {cityName}</span>
      <span>Temp : {temperature} ºC</span>
    </div>
  );
};

export default City;
