import React from "react";  
function PlayList({title, menuObject}){
    return(
        <div className="listsContainer">
            <p className="title">{title}</p>
            <ul>
                {menuObject &&
                menuObject.map((playlist) =>(
                    <li>
                        {" "}
                        <a href="#">
                            <i>{playlist.icon}</i>
                            <span>{playlist.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {PlayList};