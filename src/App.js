import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LeftMenu from './Components/LeftMenu/LeftMenu';
import MainContainer from './Components/MainContainer/MainContainer';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
      <div className="App">
        <LeftMenu/>
        <MainContainer/>
        <Topbar/>
      </div>
  );
}

export default App;
