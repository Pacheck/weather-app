import React from 'react';
import './index.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';

import sunrise from '../../assets/weather-icons/sunrise.png';
import sunset from '../../assets/weather-icons/sunset.png';

import { BiArrowBack } from 'react-icons/bi';

const API_KEY = 'a872c03613ce4a71b1f265af24764da0';

// const API_KEY2 = '679669d1038ec093aab3530bd83cbbce';

const City = (props) => {
  const initialState = {
    cityName: '',
    countryCode: '',
    temperature: '',
    sunrise: '',
    sunset: '',
    icon: '',
  };

  const [cityData, setCityData] = useState(initialState);

  useEffect(() => {
    axiosGetApi();
  }, []);

  const axiosGetApi = async () => {
    const response = await Axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${props.citie}&key=${API_KEY}`
    ).catch((err) => console.log(err));

    const data = response.data.data[0];

    setCityData({
      cityName: data.city_name,
      countryCode: data.country_code,
      temperature: data.temp,
      sunrise: data.sunrise,
      sunset: data.sunset,
      icon: `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`,
      description: data.weather.description,
    });

    console.log(response);
  };
  return (
    <div className="city-container">
      <h1 className="city-name">{cityData.cityName}</h1>
      <img src={cityData.icon}></img>
      <h2 className="city-temperature">{cityData.temperature} ºC</h2>
      <h2 className="city-description">{cityData.description}</h2>
      <span className="city-sunrise">
        <h2>{cityData.sunrise}</h2>
        <img src={sunrise} alt="sunrise" />
      </span>
      <span className="city-sunset">
        <h2>{cityData.sunset}</h2>
        <img src={sunset} alt="sunset" />
      </span>
      <BiArrowBack
        size={40}
        alt="voltar"
        onClick={props.handleSearchCity}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default City;
