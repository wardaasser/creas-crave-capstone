import React from "react";
import WaterWalk from "./WaterWalk.mp4";

export function WaterWalkVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={WaterWalk}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="waterWalkVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default WaterWalkVideo;
