import React from "react";
import RockyWaterStyled from "./RockyWaterStyled.mp4";

export function RockyWaterStyledVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={RockyWaterStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="rockyWaterStyledVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default RockyWaterStyledVideo;
