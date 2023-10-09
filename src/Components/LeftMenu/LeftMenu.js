import React from "react";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SearchIcon from '@mui/icons-material/Search';
import BrowseIcon from '@mui/icons-material/ViewAgendaOutlined';
import {Library} from "./Libaray";
import { Menulist } from "./MenuList";
import { PlayList } from "./Playlist";
import { PlayListItems } from "./PlayListsItems";
import './LeftMenu.css';


function LeftMenu()
{
    return(
        <div className="leftMenu">                
            <div className = "logoContainer">
                <i>
                    <CloudQueueIcon/>
                </i>
                <h2>Music</h2>
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Search"/>
                <i className="searchIcon">
                    <SearchIcon/>
                </i>
            </div>
            <div className="BrowseSection">
                <button className="BrowseButton" type="submit">Browse</button>
                <i className="BrowseIcon">
                    <BrowseIcon/>
                </i>
            </div>
            <Library title={"LIBRARY"} menuObject={Menulist}/>
            <PlayList title={"PlayList"} menuObject={PlayListItems}/>
        </div>
    )
}

export default LeftMenu