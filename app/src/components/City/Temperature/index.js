import React from 'react';
import './index.css';

const Temp = ({ temp, switchTemperatures, setSwitchTemperatures }) => {
  onclick = () => {
    setSwitchTemperatures(!switchTemperatures);
  };

  return <h2 className="temperature">{temp}</h2>;
};

export default Temp;
