import {React, Button} from "react";


function SignUp() {
  return (
    <div className="">
      <button className="BackButton">Back</button>
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
      <input
        className="input"
        type="text"
        placeholder="Confirm Password..."
        
      />
      <button className="login-button">Sign Up</button>
    </div>
  );
}

export default SignUp;
