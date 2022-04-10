import { Height } from '@material-ui/icons';
import {React, Component} from 'react';
import "./ServerUsers.css"

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
                    <header id = "title">Server Users</header>
                    {/* <button id = "cancel">Cancel</button> */}
                </div>
                <div id = "row-2">
                    <ul id = "d-list">
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Simon</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Clark</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Jenny</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Jacob</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Anthony</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Simon</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Clark</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Jenny</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Jacob</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Anthony</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Clark</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Jenny</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Jacob</li>
                        <li><img src='https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png' style={{ width: "20px", height: "20px" }} alt={"profile"}/>Anthony</li>
                    </ul>
                </div>
                <div id = "row-3">
                </div>
            </div>

        )
    }
}

export default DirectoryList;