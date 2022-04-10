import {React, Button} from "react";
import './EnterServer.css';


function CreateServer() {
  return (
    <div className="CreateServerContainer">
      <div>
      <button className="BackButtonCreateServer">Back</button>
      <div className="createServerinputFields">
        <input
        className="CreateServerInputFields"
        type="text"
        placeholder="Server Name..."
        />
        <inpu className="input" type="text" placeholder="Description..."/>
        <div>
        <input
          className="CreateServerInputFields"
          type="text"
          placeholder="Server Password (optional)"
          /></div>
        <button className="create-server-button">Enter Server</button>
        </div>
        </div>
    </div>
  );
}

export default CreateServer;
