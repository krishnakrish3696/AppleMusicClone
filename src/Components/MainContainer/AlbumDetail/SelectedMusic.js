import React, { createContext, useState, useEffect } from "react";

export const SongContext = createContext();

export const SelectedMusic = (props) => {
const songid = props.data;
console.log(songid)
const [song, setSong] = useState([]);
    async function getSongData() {
    const data = await fetch(
        `https://academics.newtonschool.co/api/v1/music/song/${songid}`,
        {
        headers: {
            projectId: "knjxpr9vh9wr",
        },
        } 
    );
    const response = await data.json();
    console.log(response.data);
    setSong(response.data);
    }
    useEffect(() => {
        getSongData();
    },[songid]);

const [sSong, sSetSong] = useState([
    {
        audio: song.audio_url,
        thumbnail: song.thumbnail,
        title: song.title,
        mood: song.mood
    }
]);
    return (
        <SongContext.Provider value={[sSong, sSetSong]}>
            {props.children}
        </SongContext.Provider>
    );
    
};