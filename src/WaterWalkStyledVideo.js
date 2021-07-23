import React from "react";
import WaterWalkStyled from "./WaterWalkStyled.mp4";

export function WaterWalkStyledVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={WaterWalkStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="waterWalkStyledVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default WaterWalkStyledVideo;
