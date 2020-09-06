import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import './index.css';

import CityCard from '../CityCard';

const Home = () => {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    getFavoritesFromDatabase();
  }, []);

  async function getFavoritesFromDatabase() {
    await Axios.get('http://localhost:8080/favoritos')
      .then((res) => setCityList(res.data))
      .catch((err) =>
        console.log({
          message: 'GetFavoritesFromDatabase' + err,
        })
      );
  }

  console.log(cityList);

  return (
    <div className="home-container">
      <h1>Weather App</h1>
      <ul>
        {cityList.map((city) => {
          return (
            <li key={city.id}>
              <CityCard
                name={city.cityName}
                country={city.countryCode}
                icon={city.icon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
