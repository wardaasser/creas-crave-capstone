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

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />

      <MainTopVideo />

      <div className="row">
        <div className="col noPadding">
          <WaterWalkVideo />
        </div>
        <div className="col noPadding">
          <WaterWalkStyledVideo />
        </div>
      </div>

      <div className="row">
        <div className="col noPadding">
          <CrocWalkVideo />
        </div>
        <div className="col noPadding">
          <CrocWalkStyledVideo />
        </div>
      </div>

      <div className="row">
        <div className="col noPadding">
          <PalmTreeFullVideo />
        </div>
        <div className="col noPadding">
          <PalmTreeFullStyledVideo />
        </div>
      </div>

      <BodyLinks />

      <div className="row">
        <div className="col noPadding">
          <LeafVideo />
        </div>
        <div className="col noPadding">
          <LeafStyledVideo />
        </div>
      </div>

      <div className="row">
        <div className="col noPadding">
          <RockyWaterVideo />
        </div>
        <div className="col noPadding">
          <RockyWaterStyledVideo />
        </div>
      </div>

      <div className="row">
        <div className="col noPadding">
          <FloralFloorVideo />
        </div>
        <div className="col noPadding">
          <FloralFloorStyledVideo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
