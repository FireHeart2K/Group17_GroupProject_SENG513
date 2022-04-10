import {React, Button} from "react";
import './ChatScreen.css';


function CreateServer() {
  return (
    <div className="CreateServerContainer">
      <div>
        <button className="BackButtonCreateServer">Back</button>
        <div id="header">
          <img id="#pofileBadge"></img>
          <p id="title">Rebecca's Chatroom</p>
          <button id="viewFiles"></button>
          </div>
          <div id='chatPane'>
            <div id='textBoxContainer'>
              <div id="footer">
                <button id="SendFile">_____</button>
                <input id="textBox"></input>
                <button id="sendMessage">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CreateServer;
