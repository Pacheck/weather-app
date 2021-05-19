import React, { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';

import Temp from './Temperature';
import Favorite from './Favorite';

import './index.css';

import sunrise from '../../assets/weather-icons/sunrise.png';
import sunset from '../../assets/weather-icons/sunset.png';

import { BiArrowBack } from 'react-icons/bi';

const City = (props) => {
  console.log({ props })
  const initialState = {
    id: '',
    cityName: '',
    countryCode: '',
    temperature: '',
    sunrise: '',
    sunset: '',
    icon: '',
  };

  const [cityData, setCityData] = useState(initialState);
  const [switchTemperatures, setSwitchTemperatures] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const axiosGetApi = useCallback(async () => {
    const favoriteResponse = await Axios.get(
      `http://localhost:3001/favoritos?cityName=${props.citie}`
    ).catch((err) => console.log({ favoriteResponse: err }));

    const path = favoriteResponse.data;

    const FavoriteId = path.length > 0 ? path[0].id : '';

    if (FavoriteId) {
      setIsFavorite(true);
    }

    const apiResponse = await Axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${props.citie}&key=${process.env.REACT_APP_API_KEY}`
    ).catch((err) =>
      console.log({
        apiResponse: err,
      })
    );

    const data = apiResponse.data.data[0];

    const finalState = {
      id: FavoriteId,
      cityName: data.city_name,
      countryCode: data.country_code,
      temperature: {
        celsius: data.temp + 'ºC',
        fahrenheit: ((data.temp * 9) / 5 + 32).toFixed(1) + 'ºF',
      },
      sunrise: data.sunrise,
      sunset: data.sunset,
      icon: `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`,
      description: data.weather.description,
    };

     await Axios.put(
      `http://localhost:3001/favoritos/${props.citieID}`,
      finalState
    )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log({
          updateResponse: err,
        });
      });

    // Set States
    setCityData(finalState);

    console.log(apiResponse);

    setIsLoading(false);
  })


  useEffect(() => {
    let isMounted = true;
    if(isMounted){
      setIsLoading(true);  
      axiosGetApi();
    }
    return () => { isMounted =  false }
  }, [isFavorite]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="city-container">
        <h1>
          {cityData.cityName}{' '}
          <Favorite
            favorite={isFavorite}
            setFavorite={setIsFavorite}
            cityData={cityData}
            updateHomeView={props.updateHomeView}
            homeView={props.homeView}
          />
        </h1>

        <img src={cityData.icon} alt="weather-icon"></img>
        {switchTemperatures ? (
          <Temp
            temp={cityData.temperature.celsius}
            setSwitchTemperatures={setSwitchTemperatures}
            switchTemperatures={switchTemperatures}
          />
        ) : (
          <Temp
            temp={cityData.temperature.fahrenheit}
            setSwitchTemperatures={setSwitchTemperatures}
            switchTemperatures={switchTemperatures}
          />
        )}
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
  }
};

export default City;
