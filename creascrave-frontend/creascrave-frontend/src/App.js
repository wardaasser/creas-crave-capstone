import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart";
import Creatives from "./Creatives";
import CreativesInCart from "./CreativesInCart";
import Customers from "./Customers";
import Favorites from "./Favorites";
import Footer from "./Footer";
import Login from "./Login";
import NavbarBackend from "./NavbarBackend";
import Purchases from "./Purchases";
import Sidebar from "./Sidebar";
import SidebarCreatives from "./SidebarCreatives";
import SidebarPurchases from "./SidebarPurchases";
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

          <Route path="/footer">
            <Footer />
          </Route>

          <Route path="/navbarbackend">
            <NavbarBackend />
          </Route>

          <Route path="/purchases">
            <Purchases />
          </Route>

          <Route path="/sidebar">
            <Sidebar links={["link1", "link 2"]} />
          </Route>

          <Route path="/sidebarcreatives">
            <SidebarCreatives />
          </Route>

          <Route path="/sidebarpurchases">
            <SidebarPurchases />
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
