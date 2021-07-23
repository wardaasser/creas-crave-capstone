import React from "react";
import CrocWalk from "./CrocWalk.mp4";

export function CrocWalkVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={CrocWalk}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="crocWalkVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default CrocWalkVideo;
