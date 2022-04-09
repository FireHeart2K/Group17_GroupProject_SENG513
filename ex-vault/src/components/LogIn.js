import {React, Button} from "react";


function LogIn() {
  return (
    <div className="sign-up-container">
      <input
        className="input"
        type="text"
        placeholder="Email..."
        
      />
      <input
        className="input"
        type="text"
        placeholder="Password..."
        
      />
      <button className="login-button">Log In</button>
      <button className="login-button">Sign Up</button>
      </div>
  );
}

export default LogIn;
