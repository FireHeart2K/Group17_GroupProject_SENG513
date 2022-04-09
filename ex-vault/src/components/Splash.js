import {React, useState } from 'react'
import { ReactDOM}  from 'react';
import image from '../logo.png';

function Splash() {
  return (
    <div className="form">
      
      <div className="login-container">
        <div className="header"></div>
        <div className="body"></div>
        <div className="footer"></div>
        <img src={image} height={280} alt="logo" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className='logo-font'>ExVault - File Share</h1>
        </div>
        <div className="progressbar"></div>
      </div>
  );
}

export default Splash;