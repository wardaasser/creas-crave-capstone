import React from "react";
import FloralFloorStyled from "./FloralFloorStyled.mp4";

export function FloralFloorStyledVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={FloralFloorStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="floralFloorStyledVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default FloralFloorStyledVideo;
