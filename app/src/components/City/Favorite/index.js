import Axios from 'axios';
import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const Favorite = ({
  favorite,
  setFavorite,
  cityData,
  updateHomeView,
  homeView,
}) => {
  async function saveFavoriteOnDatabase(setFavorite, cityData) {
    await Axios.post('http://localhost:3000/favoritos/', {
      ...cityData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log({ message: 'Um erro foi encontrado' + err }));

    setFavorite(true);
  }

  async function removeFavoriteFromDatabase(cityData, setFavorite) {
    const { id, cityName } = cityData;

    console.log(id, cityName);

    await Axios.delete(`http://localhost:3000/favoritos/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setFavorite(false);

    if (!homeView) {
      updateHomeView(!homeView);
    }
  }

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
