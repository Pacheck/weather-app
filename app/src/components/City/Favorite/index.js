import Axios from 'axios';
import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

async function saveFavoriteOnDatabase(setFavorite, cityData) {
  await Axios.post('http://localhost:8080/favoritos/', {
    cityData,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  setFavorite(false);
}

const Favorite = ({ favorite, setFavorite, cityData }) => {
  return (
    <>
      {favorite ? (
        <BsStarFill
          size={22}
          onClick={() => saveFavoriteOnDatabase(setFavorite, cityData)}
          style={{ marginBottom: '3px' }}
        />
      ) : (
        <BsStar
          size={22}
          onClick={() => setFavorite(true)}
          style={{ marginBottom: '3px' }}
        />
      )}
    </>
  );
};

export default Favorite;
