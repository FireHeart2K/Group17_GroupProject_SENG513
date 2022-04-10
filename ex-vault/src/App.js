import React from 'react'
import Splash from './components/Splash';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import DirectoryList from './components/DirectoryList';
import ActiveRooms from './components/AcriveRooms';
import './App.css';
import CreateServer from './components/CreateServer';

function App() {
    return (
        <div className='App'>
            <CreateServer/>
        </div>
    )


}

export default App