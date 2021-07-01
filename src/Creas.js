import React from "react";
// import { ReactVideo } from "reactjs-media";
import PalmTree from "./PalmTree.mp4";

export function Creas() {
  return (
    <div>
      <video
        autostart
        autoPlay
        src={PalmTree}
        className="vidContainer"
        // controls
        loop
        id="mainTopVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default Creas;
