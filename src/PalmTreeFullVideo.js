import React from "react";
import PalmTreeFull from "./PalmTreeFull.mp4";

export function PalmTreeFullVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={PalmTreeFull}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="palmTreeFullVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default PalmTreeFullVideo;
