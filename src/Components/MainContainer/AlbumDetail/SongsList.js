import React, { useState, useEffect } from "react";
import SongDurationComponent from "./SongDurationComponent";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AudioPlayer from "../../Topbar/AudioPlayer";
import { SelectedMusic } from "./SelectedMusic";

const SongsList = (props) => {
  const mood = props.data;
  const [selectedSong, setSelectedSong] = useState(null);
  const [allsong, setAllSongs] = useState([]);
  async function getCatergoryData() {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${mood}"}`,
      {
        headers: {
          projectId: "knjxpr9vh9wr",
        },
      }
    );
    const response = await data.json();
    // console.log(response.data);
    setAllSongs(response.data);
  }

  useEffect(() => {
    getCatergoryData();
  },[props.data]);
  
  return (
    <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Song</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell align="right">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allsong?.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" scope="row" sx={{ minWidth: 400 }}>
                    <span onClick={() => setSelectedSong(item._id)} >{item.title}</span>
                  </TableCell>
                  <TableCell>
                  {item.artist.map((data) => 
                       <span>{data.name},</span>
                      )}
                  </TableCell>
                  <TableCell align="right"><SongDurationComponent audioUrl={item.audio_url}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {selectedSong && <SelectedMusic data={selectedSong}/>}
    </div>
  );
};

export default SongsList;
