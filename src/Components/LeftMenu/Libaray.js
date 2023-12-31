import React from "react";  
function Library({title, menuObject}){
    return(
        <div className="listsContainer">
            <p className="title">{title}</p>
            <ul>
                {menuObject &&
                menuObject.map((menu) =>(
                    <li>
                        {" "}
                        <a href="#">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {Library};