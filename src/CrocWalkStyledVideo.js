import React from "react";
import CrocWalkStyled from "./CrocWalkStyled.mp4";

export function CrocWalkStyledVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={CrocWalkStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="crocWalkStyledVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default CrocWalkStyledVideo;
