import React from "react";
import WaterWalkStyled from "./WaterWalkStyled.mp4";
import lightBulbLikeIcon from "./images/lightBulbLikeIcon.png";

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
        className="likeIcon"
        href="/favorites"
        style={{
          position: "absolute",
          bottom: 88,
          left: 50,
          zIndex: 6,
          role: "button",
        }}
      >
        <img
          className="lightBulbLikeIcon img-responsive"
          style={{ height: 34 }}
          src={lightBulbLikeIcon}
          alt="Light Bulb Icon"
          id="lightBulbLikeIcon"
        />
      </a>

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
