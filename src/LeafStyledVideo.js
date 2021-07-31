import React from "react";
import LeafStyled from "./LeafStyled.mp4";

export function LeafStyledVideo() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={LeafStyled}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="leafStyledVideo"
        type="video/mp4"
      ></video>

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/VsCwT"
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
export default LeafStyledVideo;
