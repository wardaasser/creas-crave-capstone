import React from "react";
import RockyWater from "./RockyWater.mp4";

export function RockyWaterVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={RockyWater}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="rockyWaterVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default RockyWaterVideo;
