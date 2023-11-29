import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LeftMenu from './Components/LeftMenu/LeftMenu';
import MainContainer from './Components/MainContainer/MainContainer';
import Topbar from './Components/Topbar/Topbar';
import AlbumDetail from './Components/MainContainer/AlbumDetail/AlbumDetail';
import { SelectedMusic } from './Components/MainContainer/AlbumDetail/SelectedMusic';

function App() {
  return (
    <SelectedMusic>
      <div className="App">
        <LeftMenu/>
        <MainContainer/>
        <Topbar/>
      </div>
      </SelectedMusic>
  );
}

export default App;
