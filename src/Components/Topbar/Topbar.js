import React, { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import "./Topbar.css";
import UseModal from "./SigninPopup/SigninPopup";

function Topbar() {
  return (
    <div className="Topbarsection">
      <AudioPlayer/>
    </div>
  );
}
export default Topbar;
