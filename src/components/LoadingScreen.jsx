import React from 'react';
import '../LoadingScreen.scss'; // Replace with the actual CSS file for your loading screen

const LoadingScreen = () => {
  return (
    <div class='wrap'>
      <div class='loading'>
        <div class='bounceball'></div>
        <div class='text'> LOADING..</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
