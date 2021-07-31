import React from "react";
import WaterWalk from "./WaterWalk.mp4";

export function WaterWalkVideo() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={WaterWalk}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="waterWalkVideo"
        type="video/mp4"
      ></video>

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/rBovh"
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
export default WaterWalkVideo;
