import React from "react";
import FloralFloor from "./FloralFloor.mp4";

export function FloralFloorVideo() {
  return (
    <div>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={FloralFloor}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="floralFloorVideo"
        type="video/mp4"
      ></video>
    </div>
  );
}
export default FloralFloorVideo;
