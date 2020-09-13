import Axios from 'axios';
import React, { useEffect, useState } from 'react';

import './index.css';

import CityCard from '../CityCard';
import City from '../City';

const Home = () => {
  const [cityList, setCityList] = useState([]);
  const [showCity, setShowCity] = useState('');
  const [cityID, setCityID] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getFavoritesFromDatabase();
  }, [update]);

  // console.log(update);

  async function getFavoritesFromDatabase() {
    await Axios.get('http://localhost:8080/favoritos')
      .then((res) => setCityList(res.data))
      .catch((err) =>
        console.log({
          message: 'GetFavoritesFromDatabase' + err,
        })
      );
  }

  function handleSearchCity() {
    console.log({
      handlerMessage: 'new showCity handler passthrough',
    });
    setShowCity('');
    setCityID('');
  }

  console.log(cityList);

  return (
    <div className="home-container">
      <h1>Weather App</h1>

      {showCity && (
        <City
          citie={showCity}
          citieID={cityID}
          handleSearchCity={handleSearchCity}
          updateHomeView={setUpdate}
          homeView={update}
        />
      )}

      {!showCity && (
        <ul className="ul-container">
          {cityList.map((city) => {
            return (
              <li
                key={city.id}
                onClick={() => {
                  setShowCity(city.cityName);
                  setCityID(city.id);
                }}
              >
                <CityCard
                  name={city.cityName}
                  country={city.countryCode}
                  icon={city.icon}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
