import React, {  useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import {Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./AllCards.css";

function AllCards () {
    const location = useLocation();
    var id = location.search.slice(1);
    const [allsong, setAllSongs] = useState([]);
    async function getCatergoryData() {
      const data = await fetch(
        `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${id}"}&limit=200`,
        {
          headers: {
            projectId: "knjxpr9vh9wr",
          },
        }
      );
      const response = await data.json();
      setAllSongs(response.data);
    }
  
    useEffect(() => {
      getCatergoryData();
    },[]);

    return (
      <div className="Detail">
        <div><h2 id="DetailID">{id.toUpperCase()}</h2></div>
        <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px', paddingBottom: "200px" }}>
        {allsong?.map((item) => (
          <div key={item.id} className="CardDetail">
            <Card sx={{ width: 240, height: 240 }}>
            <Link to={{
                pathname: "AlbumDetail",
                hash: item._id
                }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.thumbnail}
                  alt="green iguana"
                />
              </CardActionArea>
              </Link>
            </Card>
            <h7 className="cardTitle">{item.title}</h7>
          </div>
        ))}
      </div>
    </div>
    );
}

export default AllCards;