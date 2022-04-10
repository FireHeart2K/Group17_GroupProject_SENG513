import React from 'react'
import Splash from './components/Splash';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import DirectoryList from './components/DirectoryList';
import ActiveRooms from './components/AcriveRooms';
import './App.css';
import CreateServer from './components/CreateServer';
import EnterServer from './components/EnterServer';
import ChatScreen from './components/ChatScreen';
import ServerUsers from './components/ServerUsers';

function App() {
    return (
        <div className='App'>
            <ServerUsers/>
        </div>
    )


}

export default App