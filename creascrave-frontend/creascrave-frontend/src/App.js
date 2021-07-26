import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart";
import Creatives from "./Creatives";
import CreativesInCart from "./CreativesInCart";
import Customers from "./Customers";
import Favorites from "./Favorites";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/creatives">
            <Creatives />
          </Route>

          <Route path="/creativesincart">
            <CreativesInCart />
          </Route>

          <Route path="/customers">
            <Customers />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/sidebar">
            <Sidebar />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
