import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="wrapper">
      <div id='loader'>
        <div id="top"></div>
        <div id="center"></div>
        <div id="bottom"></div>
      </div>
    </div>
  );
};

export default Loader;
