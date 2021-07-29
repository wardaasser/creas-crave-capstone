import React from "react";
import RockyWaterStyled from "./RockyWaterStyled.mp4";

export function RockyWaterStyledVideo() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={RockyWaterStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="rockyWaterStyledVideo"
        type="video/mp4"
      ></video>

      <a
        className="btn btn-secondary"
        href="https://gumroad.com/l/tUVpr"
        style={{
          position: "absolute",
          top: 215,
          left: 50,
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
export default RockyWaterStyledVideo;
