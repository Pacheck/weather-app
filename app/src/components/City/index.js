import React from 'react';
import './index.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';

import sunrise from '../../assets/weather-icons/sunrise.png';

const API_KEY = 'a872c03613ce4a71b1f265af24764da0';

// const API_KEY2 = '679669d1038ec093aab3530bd83cbbce';

const City = (props) => {
  const initialState = {
    cityName: '',
    temperature: '',
    sunrise: '',
    sunset: '',
  };
  // const [cityName, setCityName] = useState('');
  // const [temperature, setTemperature] = useState('');

  const [cityData, setCityData] = useState(initialState);

  useEffect(() => {
    axiosGetApi();
  }, []);

  const axiosGetApi = async () => {
    const response = await Axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${props.citie}&key=${API_KEY}`
    );

    const data = response.data.data[0];

    // setCityName(response.data.data[0].city_name);
    // setTemperature(response.data.data[0].temp);
    setCityData({
      cityName: data.city_name,
      temperature: data.temp,
      sunrise: data.sunrise,
      sunset: data.sunset,
    });
    console.log(response);
  };

  return (
    <div>
      <h1>{cityData.cityName}</h1>
      <h2>{cityData.temperature} ºC</h2>
      <span className="sunrise-content">
        <h2>{cityData.sunrise}</h2>
        <img src={sunrise} alt={sunrise} />
      </span>
      <h2>{cityData.sunset}</h2>
    </div>
  );
};

export default City;
