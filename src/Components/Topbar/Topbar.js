import React, { useState } from "react";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LoopIcon from '@mui/icons-material/Loop';
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import InputSlider from "./VolumeSlider";
import "./Topbar.css"


function Topbar() {
     const [isPlaying,setPlaying] = useState(false);

    const ChangePlayPause = () => {
        setPlaying(!isPlaying);
    }    

    return(
        <div className="Topbarsection">
            <div className="MusicPlayersection">
                <div className="Shuffle">
                    <IconButton>
                        <ShuffleIcon fontSize="Large"/>
                    </IconButton>
                </div>
                <div className="FastRewind">
                    <IconButton>
                        <FastRewindIcon fontSize="Large"/>
                    </IconButton>
                </div>
                <div className="Play/Pause" onClick={ChangePlayPause}>
                    {isPlaying ? (
                        <IconButton>
                            <PauseIcon/>
                        </IconButton>
                    ) : (
                        <IconButton>
                            <PlayArrowIcon/>
                        </IconButton>
                    )}
                </div>
                <div className="FastForward">
                    <IconButton>
                        <FastForwardIcon fontSize="Large"/>
                    </IconButton>
                </div>
                <div className="Loop">
                <IconButton>
                        <LoopIcon fontSize="Large"/>
                    </IconButton>
                </div>
            </div>
            <div className="Music">
                    
            </div>
            <div className="Volumebar">
                <IconButton>
                    <InputSlider fontSize="small"/>
                </IconButton>
            </div>
        </div>
    )
}
export default Topbar;