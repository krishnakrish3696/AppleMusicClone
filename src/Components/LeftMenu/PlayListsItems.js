import React from 'react';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const PlayListItems = [
    {
        id:1,
        icon:<IconButton> <QueueMusicIcon fontSize='small'/> </IconButton>,
        name: "Romantic!",
    },
    {
        id:1,
        icon:<IconButton> <QueueMusicIcon fontSize='small'/> </IconButton>,
        name: "Happy!",
    },
    {
        id:1,
        icon:<IconButton> <QueueMusicIcon fontSize='small'/> </IconButton>,
        name: "Sad",
    },
    {
        id:1,
        icon:<IconButton> <AddIcon fontSize='small'/> </IconButton>,
        name: "Excited",
    },
];

export {PlayListItems};