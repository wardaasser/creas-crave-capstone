import React from "react";
import Leaf from "./Leaf.mp4";

export function LeafVideo() {
  return (
    <div style={{ position: "relative" }}>
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

      <a
        className="btn btn-secondary"
        href="https://gumroad.com/l/AfVsy"
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
export default LeafVideo;
