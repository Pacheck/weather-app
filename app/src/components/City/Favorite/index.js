import Axios from 'axios';
import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

async function saveFavoriteOnDatabase(setFavorite, cityData) {
  await Axios.post('http://localhost:8080/favoritos/', {
    ...cityData,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log({ message: 'Um erro foi encontrado' + err }));

  setFavorite(true);
}

async function removeFavoriteFromDatabase(cityData, setFavorite) {
  const { id, cityName } = cityData;

  await Axios.delete(`http://localhost:8080/favoritos/${id}`, {
    params: {
      cityName: cityName,
    },
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
          onClick={() => removeFavoriteFromDatabase(cityData, setFavorite)}
          style={{ marginBottom: '3px' }}
        />
      ) : (
        <BsStar
          size={22}
          onClick={() => saveFavoriteOnDatabase(setFavorite, cityData)}
          style={{ marginBottom: '3px' }}
        />
      )}
    </>
  );
};

export default Favorite;
