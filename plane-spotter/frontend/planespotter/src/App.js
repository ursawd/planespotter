import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Logbook from "./Logbook.js";
import Search from "./Search.js";
import Navbar from "./Navbar.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <div className="App">
      <h1> Plane Spotter App</h1>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/Logbook">
            <Logbook />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
