import React from "react";
import PalmTreeFull from "./PalmTreeFull.mp4";

export function PalmTreeFullVideo() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={PalmTreeFull}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="palmTreeFullVideo"
        type="video/mp4"
      ></video>

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/hrxFaI"
        style={{
          position: "absolute",
          top: 215,
          left: 60,
          zIndex: 5,
          backgroundColor: "#5ce1e6",
          border: "none",
        }}
      >
        BUY NOW
      </a>
    </div>
  );
}
export default PalmTreeFullVideo;
