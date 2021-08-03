import React from "react";
import WaterWalkStyled from "./WaterWalkStyled.mp4";

export function WaterWalkStyledVideo() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={WaterWalkStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="waterWalkStyledVideo"
        type="video/mp4"
      ></video>
      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/dPNuE"
        style={{
          position: "absolute",
          bottom: 44,
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
export default WaterWalkStyledVideo;
