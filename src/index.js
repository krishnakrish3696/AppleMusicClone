import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetail from './Components/MainContainer/AlbumDetail/AlbumDetail';
import MainContainer from './Components/MainContainer/MainContainer';
import AppleClone from './Components/AppleClone'; 
import AllCards from './Components/MainContainer/AllCards/AllCards';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={AppleClone}>
      <Route exact path="MainContainer" Component={MainContainer}></Route>
      <Route exact path="AlbumDetail" Component={AlbumDetail}></Route>
      <Route exact path="AllCards/AlbumDetail" Component={AlbumDetail}></Route> 
      <Route exact path="AllCards" Component={AllCards}></Route>  
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

