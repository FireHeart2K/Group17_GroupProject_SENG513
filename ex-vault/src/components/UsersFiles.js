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
                    <header id = "title">User's Files</header>
                    {/* <button id = "cancel">Cancel</button> */}
                </div>
                <div id = "row-2">
                    <ul id = "d-list">
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962790775551311872/PDF-Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Notes.pdf</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962791667520372846/MP3_File_Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Audio Book.mp3</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962792826360442880/zip_file_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> compressed_data.zip</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962790775551311872/PDF-Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Notes.pdf</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962791667520372846/MP3_File_Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Audio Book.mp3</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962792826360442880/zip_file_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> compressed_data.zip</li><li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962790775551311872/PDF-Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> PDF File</li>
                        <li><img src='https://media.discordapp.net/attachments/935458880467632181/962794015080722482/JPG_image_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Image 1</li>
                        <li><img src='https://media.discordapp.net/attachments/935458880467632181/962794015080722482/JPG_image_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Image 2</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962790775551311872/PDF-Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Notes.pdf</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962791667520372846/MP3_File_Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Audio Book.mp3</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962792826360442880/zip_file_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> compressed_data.zip</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962790775551311872/PDF-Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Notes.pdf</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962791667520372846/MP3_File_Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Audio Book.mp3</li>
                        <li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962792826360442880/zip_file_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> compressed_data.zip</li><li><img src='https://cdn.discordapp.com/attachments/935458880467632181/962790775551311872/PDF-Icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> PDF File</li>
                        <li><img src='https://media.discordapp.net/attachments/935458880467632181/962794015080722482/JPG_image_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Image 1</li>
                        <li><img src='https://media.discordapp.net/attachments/935458880467632181/962794015080722482/JPG_image_icon.png' style={{ width: "20px", height: "20px" }} alt={".."}/> Image 2</li>
                    </ul>
                </div>
                <div id = "row-3">
                </div>
            </div>

        )
    }
}

export default DirectoryList;