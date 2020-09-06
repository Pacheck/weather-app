import React from 'react';
// import Axios from 'axios';

import './index.css';

const CityCard = (props) => {
  return (
    <div>
      <h2>
        {props.name}, {props.country}
      </h2>
      <img src={props.icon} sizes={'5px'} />
    </div>
  );
};

export default CityCard;
