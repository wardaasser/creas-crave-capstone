import React from "react";
import Leaf from "./Leaf.mp4";

export function LeafVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={Leaf}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="leafVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default LeafVideo;
