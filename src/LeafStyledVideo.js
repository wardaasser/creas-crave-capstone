import React from "react";
import LeafStyled from "./LeafStyled.mp4";

export function LeafStyledVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={LeafStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="leafStyledVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default LeafStyledVideo;
