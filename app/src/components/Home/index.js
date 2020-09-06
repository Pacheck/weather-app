import Axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    <ul>
      {cityList.map((city) => {
        return <li key={city.id}>{/* <CityCard /> */}</li>;
      })}
    </ul>
  );
};

export default Home;
