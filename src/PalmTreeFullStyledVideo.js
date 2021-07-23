import React from "react";
import PalmTreeFullStyled from "./PalmTreeFullStyled.mp4";

export function PalmTreeFullStyledVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={PalmTreeFullStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="palmTreeFullStyledVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default PalmTreeFullStyledVideo;
