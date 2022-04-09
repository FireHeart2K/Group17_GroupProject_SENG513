import {React, Component} from 'react';
import "./DirectoryList.css"

class DirectoryList extends Component{
    render(){
        return(
            <div id = "container">
                <div id = "row-1">
                    <div id = "menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <header id = "title">Local Directory</header>
                    <button id = "cancel">Cancel</button>
                </div>
                <div id = "row-2">
                    <ul id = "d-list">
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                        <li>file</li>
                    </ul>
                </div>
                <div id = "row-3">
                    <button id = "upload">UPLOAD</button>
                </div>
            </div>

        )
    }
}

export default DirectoryList;