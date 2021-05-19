import React from 'react';
// import Axios from 'axios';

import './index.css';

const CityCard = (props) => {
  return (
    <div className="card-container">
      <div>
        <h2>
          {props.name}, {props.country}
        </h2>
        <img src={props.icon} sizes={'5px'} alt="weather icon" />
      </div>
    </div>
  );
};

export default CityCard;
