import React from "react";
import PalmTree from "./PalmTree.mp4";

export function MainTopVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={PalmTree}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="mainTopVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default MainTopVideo;
