import React from 'react';
import './index.css';

const Temp = ({ temp, switchTemperatures, setSwitchTemperatures, click }) => {
  onclick = () => {
    setSwitchTemperatures(!switchTemperatures);
  };

  return <h2 className="temperature">{temp}</h2>;
};

export default Temp;
