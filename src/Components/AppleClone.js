import React from "react";
import { Outlet, useLocation} from "react-router-dom";
import LeftMenu from "./LeftMenu/LeftMenu";
import Topbar from "./Topbar/Topbar";
import MainContainer from "./MainContainer/MainContainer";
import "../App.css";

const AppleClone = (props) => {
  const location = useLocation();
  console.log(location.hash);
  const shouldRenderMainContainer = location.search == '' && location.hash == '' ? true : false;
  return (
    <div className="App">
      {shouldRenderMainContainer ?<MainContainer /> : null}
        <LeftMenu/>
        <Topbar/>
      <Outlet />
    </div>
  )
};

export default AppleClone;