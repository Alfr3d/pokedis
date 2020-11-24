import React from 'react';
import './_loading.scss';

const Loading = () => {
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

export default Loading;
