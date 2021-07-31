import React from "react";
import CrocWalk from "./CrocWalk.mp4";

export function CrocWalkVideo() {
  return (
    <div style={{ position: "relative" }}>
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

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/DQfpJ"
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
export default CrocWalkVideo;
