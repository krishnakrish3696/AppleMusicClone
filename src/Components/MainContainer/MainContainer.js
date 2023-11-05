import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainContainer.css';
import SimpleSlider from "./SimpleSlider/SimplerSlider";
import AlbumSlider from "./AlbumSlider/AlbumSlider";

function MainContainer() {

   // const [albums, setAlbums] = useState([])
    const Moods = [{
        category:"romantic",title:"Romantic Songs",
    },
    {
        category:"happy",title:"Happy Songs",
    },
    {
        category:"sad",title:"Sad Songs",
    },
    {
        category:"excited",title:"excited Songs",
    }]
    useEffect(() =>{
        fetch('https://academics.newtonschool.co/api/v1/music/song',{
            method:'GET',
            headers: {
                'projectId': 'knjxpr9vh9wr'
            }
        })
        .then(response => response.json())
       // .then(data => setAlbums(data.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="MainContainersection">
            <div className="BrowserBanner">
                <h1>
                    Browse
                </h1>
                <hr/>
               <div>
                    <AlbumSlider/>
               </div>
            </div>
            <div className="NewMusicAlbum">
                <h3>
                    New Music
                </h3>
                <hr />
                <div>   
                {
                    Moods.map((item)=> <SimpleSlider categories={item} />)
                }
                </div>
            </div>
        </div>
    )
}

export default MainContainer;