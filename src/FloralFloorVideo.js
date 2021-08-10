import React from "react";
import FloralFloor from "./FloralFloor.mp4";
import plusSignFavIcon from "./images/plusSignFavIcon.png";

export function FloralFloorVideo() {
  return (
    <div style={{ position: "relative" }}>
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

      <a
        className="favIcon"
        href="/favorites"
        style={{
          position: "absolute",
          bottom: 81,
          left: 60,
          zIndex: 6,
          role: "button",
        }}
      >
        <img
          className="plusSignFavIcon img-responsive"
          style={{ width: "5%" }}
          src={plusSignFavIcon}
          alt="Plus Sign Icon"
          id="plusSignFavIcon"
          title="Fav This!"
        />
      </a>

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/oUVrcH"
        style={{
          position: "absolute",
          bottom: 44,
          left: 60,
          zIndex: 5,
          backgroundColor: "#5ce1e6",
          border: "none",
        }}
      >
        BUY
      </a>
    </div>
  );
}
export default FloralFloorVideo;
