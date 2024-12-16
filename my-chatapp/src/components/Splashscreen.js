import React from 'react'
import imgOne from "../images/ghostChat.png"



const SplashScreen = () => {
  return (
    <>
      <div className='splash-style'>
        <img src={imgOne} alt="App Logo" className="w-ful h-ful " />

        <br />
        {/* <div className="spinner"></div> */}
      </div>
    </>
  );
};

export default SplashScreen;
