import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>

          <Route path="/customers">
            <Customers />
          </Route>

          <Route path="/creatives">
            <Creatives />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/creativesincart">
            <CreativesInCart />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
