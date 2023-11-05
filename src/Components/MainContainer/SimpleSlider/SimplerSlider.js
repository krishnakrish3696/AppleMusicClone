import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const SimpleSlider = (props) => {
  const { category, title } = props.categories;
  const [allsong, setAllSongs] = useState([]);
  async function getCatergoryData() {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${category}"}`,
      {
        headers: {
          projectId: "knjxpr9vh9wr",
        },
      }
    );
    
    const response = await data.json();
    setAllSongs(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    getCatergoryData();
  }, []);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
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
      <h2>{title} </h2>
      <Slider {...settings}>
        {allsong?.map((item) => {
          return (
            <div>
              <Card sx={{ maxWidth: 220 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.thumbnail}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
