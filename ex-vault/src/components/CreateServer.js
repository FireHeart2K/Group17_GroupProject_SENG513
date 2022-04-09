import {React, Button} from "react";


function CreateServer() {
  return (
    <div>
      <button className="BackButtonCreateServer">Back</button>
      <div className="createServerinputFields">
        <input
        className="input"
        type="text"
        placeholder="Server Name..."
        />
        <inpu className="input" type="text" placeholder="Description..."/>
        <input
          className="input"
          type="text"
          placeholder="Server Password (optional)"
          />
        <button className="create-server-button">Creater Server</button>
        </div>
    </div>
  );
}

export default CreateServer;
