import "./App.css";
import Navbar from "./Navbar";
import BodyLinks from "./BodyLinks";
import Footer from "./Footer";

import { MainTopVideo } from "./MainTopVideo";

import { PalmTreeFullVideo } from "./PalmTreeFullVideo";
import { PalmTreeFullStyledVideo } from "./PalmTreeFullStyledVideo";
import { CrocWalkVideo } from "./CrocWalkVideo";
import { CrocWalkStyledVideo } from "./CrocWalkStyledVideo";
import { RockyWaterVideo } from "./RockyWaterVideo";
import { RockyWaterStyledVideo } from "./RockyWaterStyledVideo";

import { LeafVideo } from "./LeafVideo";
import { LeafStyledVideo } from "./LeafStyledVideo";
import { WaterWalkVideo } from "./WaterWalkVideo";
import { WaterWalkStyledVideo } from "./WaterWalkStyledVideo";
import { FloralFloorVideo } from "./FloralFloorVideo";
import { FloralFloorStyledVideo } from "./FloralFloorStyledVideo";

import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const videos = [
    {
      original: <WaterWalkVideo />,
      styled: <WaterWalkStyledVideo />,
      tags: ["water", "walk", "feet", "beach", "ocean", "stroll", "sand"],
    },
    {
      original: <CrocWalkVideo />,
      styled: <CrocWalkStyledVideo />,
      tags: [
        "croc",
        "walk",
        "reptile",
        "water",
        "semiaquatic",
        "slither",
        "sand",
      ],
    },
    {
      original: <PalmTreeFullVideo />,
      styled: <PalmTreeFullStyledVideo />,
      tags: ["palm", "tree", "sky", "wind", "shadow", "leaves", "evergreen"],
    },
    {
      original: <LeafVideo />,
      styled: <LeafStyledVideo />,
      tags: ["leaf", "stem", "wind", "breeze", "plant", "leaves", "yard"],
    },
    {
      original: <RockyWaterVideo />,
      styled: <RockyWaterStyledVideo />,
      tags: ["rocky", "water", "rock", "beach", "ocean", "bird", "sand"],
    },
    {
      original: <FloralFloorVideo />,
      styled: <FloralFloorStyledVideo />,
      tags: [
        "floral",
        "floor",
        "pond",
        "water",
        "bird",
        "reflection",
        "leaves",
      ],
    },
  ];

  let searchResults = videos.filter((video) => {
    return video.tags.includes(searchInput);
  });

  let videosToShow = searchResults.length ? searchResults : videos;

  return (
    <div className="App container-fluid">
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />

      <MainTopVideo />

      <BodyLinks />

      {videosToShow.map((video, index) => {
        return (
          <div className="row" key={index}>
            <div className="col noPadding">{video.original}</div>
            <div className="col noPadding">{video.styled}</div>
          </div>
        );
      })}

      {/* <div className="row">
        <div className="col noPadding">
          <PalmTreeFullVideo />
        </div>
        <div className="col noPadding">
          <PalmTreeFullStyledVideo />
        </div>
      </div> */}

      {/* <BodyLinks /> */}

      {/* <div className="row">
        <div className="col noPadding">
          <LeafVideo />
        </div>
        <div className="col noPadding">
          <LeafStyledVideo />
        </div>
      </div> */}

      {/* <div className="row">
        <div className="col noPadding">
          <RockyWaterVideo />
        </div>
        <div className="col noPadding">
          <RockyWaterStyledVideo />
        </div>
      </div> */}

      {/* <div className="row">
        <div className="col noPadding">
          <FloralFloorVideo />
        </div>
        <div className="col noPadding">
          <FloralFloorStyledVideo />
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
