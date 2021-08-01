import React from "react";
import PalmTree from "./PalmTree.mp4";

export function MainTopVideo() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={PalmTree}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="mainTopVideo"
        type="video/mp4"
      ></video>

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/VmnNl"
        style={{
          position: "absolute",
          top: 450,
          left: 50,
          zIndex: 5,
          backgroundColor: "#5ce1e6",
          border: "none",
        }}
        data-cy="buy-main-vid"
      >
        BUY NOW
      </a>
    </div>
  );
}
export default MainTopVideo;
