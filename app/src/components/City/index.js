import React from 'react';
import './index.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';

import sunrise from '../../assets/weather-icons/sunrise.png';
import sunset from '../../assets/weather-icons/sunset.png';

const API_KEY = 'a872c03613ce4a71b1f265af24764da0';

// const API_KEY2 = '679669d1038ec093aab3530bd83cbbce';

const City = (props) => {
  const initialState = {
    cityName: '',
    temperature: '',
    sunrise: '',
    sunset: '',
    icon: '',
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
      icon: data.weather.icon,
    });
    console.log(response);
  };

  return (
    <div>
      <h1 className="city-name">{cityData.cityName}</h1>
      <h2 className="city-temperature">{cityData.temperature} ºC</h2>
      <span className="city-sunrise">
        <h2>{cityData.sunrise}</h2>
        <img src={sunrise} alt="sunrise" />
      </span>
      <span className="city-sunset">
        <h2 className="city-sunset">{cityData.sunset}</h2>
        <img src={sunset} alt="sunset" />
      </span>
    </div>
  );
};

export default City;
