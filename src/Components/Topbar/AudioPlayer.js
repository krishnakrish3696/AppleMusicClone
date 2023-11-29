import React, {useState, useRef, useEffect, useContext} from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LoopIcon from "@mui/icons-material/Loop";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import InputSlider from "./VolumeSlider";
import { ImAppleinc } from "react-icons/im";
import UseModal from "./SigninPopup/SigninPopup";
import { SongContext } from "../MainContainer/AlbumDetail/SelectedMusic";
import './Topbar.css';

const AudioPlayer = (props) => {
    // const [sSong, sSetSong] = useContext(SongContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTIme] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef =  useRef(null);
    // console.log(song)

    // const [song, setSong] = useState([]);
    // async function getSongData() {
    //   const data = await fetch(
    //     `https://academics.newtonschool.co/api/v1/music/song/${songid}`,
    //     {
    //       headers: {
    //         projectId: "knjxpr9vh9wr",
    //       },
    //     } 
    //   );
    //   const response = await data.json();
    //   setSong(response.data);
    // }

    // useEffect(() => {
    //     getSongData();
    //   },[songid]);

    const ChangePlayPause = () => {
        if(isPlaying){
            handlePause();
        }
        else{
            handlePlay();
        }
        // setIsPlaying(!isPlaying);
      };

    //   function formatDuration(durationSeconds){
    //     const minutes = Math.floor(durationSeconds/60);
    //     const seconds = Math.floor(durationSeconds % 60);
    //     const formattedSeconds = seconds.toString().padStart(2,"0");
    //     return `${minutes}:${formattedSeconds}`;
    //   }

    // useEffect(() => {
    //     audioRef.current.addEventListner("timeupdate",handleTimeUpdate);

    //     return () => {
    //         audioRef.current.removeEventListner("timeupdate", handleTimeUpdate);
    //     }
    // }, []);

    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTIme(e.target.value);
    }

    const handleTimeUpdate = () => {
        setCurrentTIme(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    }

    const handlePlay = () =>{
        audioRef.current.play();
        setIsPlaying(true);
    }
    
    const handlePause = () =>{
        audioRef.current.pause();
        setIsPlaying(false);
    }

    
    return (
        <div className="MusicPlayersection">
            <div className="Shuffle">
            <IconButton>
                <ShuffleIcon fontSize="Small" />
            </IconButton>
            </div>
            <div className="FastRewind">
            <IconButton>
                <FastRewindIcon fontSize="Medium" />
            </IconButton>
            </div>
            <div className="Play/Pause" onClick={ChangePlayPause}>
            {isPlaying ? (
                <IconButton>
                <PauseIcon />
                </IconButton>
            ) : (
                <IconButton>
                <PlayArrowIcon />
                </IconButton>
            )}
            </div>
            <div className="FastForward">
            <IconButton>
                <FastForwardIcon fontSize="Medium" />
            </IconButton>
            </div>
            <div className="Loop">
            <IconButton>
                <LoopIcon fontSize="Small" />
            </IconButton>
            </div>

            {/* <div className="Music">
                <div className="logo">
                    {song && song.thumbnail ? <img id="Songlogo" src={song.thumbnail} alt="Cover"/> : 
                    <img id="Songlogo" src="https://visualpharm.com/assets/62/Apple-595b40b75ba036ed117d984c.svg" alt="Cover"/>}
                </div>  
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                />
                {song ? <audio ref={audioRef} src={song.audio_url} />: null}
                <div className="songTitle">
                    {song && song.title  ? <p>{song.title}</p> : null}
                </div>
                <div className="songDescription">   
                    {song && song.mood ?  <p>{song.mood}</p> : null}
                </div>
            
            </div> */}
            <div className="Volumebar">
                <IconButton>
                    <InputSlider fontSize="small" />
                </IconButton>
            </div>
            <div className="Signin">
                <UseModal />
            </div>
        </div>
    )
};

export default AudioPlayer;