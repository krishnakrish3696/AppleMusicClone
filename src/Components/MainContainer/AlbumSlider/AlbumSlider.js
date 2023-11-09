import React, { Component , useState, useEffect} from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./AlbumSlider.css";

const AlbumSlider = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() =>{
        fetch('https://academics.newtonschool.co/api/v1/music/album',{
            method:'GET',
            headers: {
                'projectId': 'knjxpr9vh9wr'
            }
        })
        .then(response => response.json())
        .then(data => setAlbums(data.data))
        .catch(err => console.log(err))
    }, []);
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
      <div>
        <Slider {...settings}>
        {albums?.map((item) => {
          return (
            <div>
                <div className="AlbumTitleandDescription">
                    <h4>
                        {item.description}
                    </h4>
                    <p>
                        {item.title}
                    </p>
                </div>
              <Card sx={{ maxWidth: 750 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={item.image}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            </div>
          );
        })}
        </Slider>
      </div>
    );
};

export default AlbumSlider;