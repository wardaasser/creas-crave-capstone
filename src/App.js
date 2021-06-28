import "./App.css";
import { Creas } from "./Creas";

function App() {
  return (
    <div className="App container-fluid">
      <Creas />
      <div className="row">
        <div className="col noPadding">
          <Creas />
        </div>
        <div className="col noPadding">
          <Creas />
        </div>
      </div>

      <div className="row">
        <div className="col noPadding">
          <Creas />
        </div>
        <div className="col noPadding">
          <Creas />
        </div>
      </div>

      <div className="row">
        <div className="col noPadding">
          <Creas />
        </div>
        <div className="col noPadding">
          <Creas />
        </div>
      </div>
    </div>
  );
}

export default App;
