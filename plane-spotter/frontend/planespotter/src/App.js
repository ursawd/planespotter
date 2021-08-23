import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home.js";
import LoginForm from "./LoginForm.js";
import Logout from "./Logout.js";
import RegisterForm from "./RegisterForm.js";
import Logbook from "./Logbook.js";
import Navbar from "./Navbar.js";
import NotFound from "./NotFound.js";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  //loginFunction -- takes user input from login form and if user
  //authenticated sets user state to user information
  async function loginFunction({ email, password }) {
    async function getUser() {
      const result = await axios.post("http://localhost:3001/user", {
        email: email,
        password: password,
      });
      return result;
    }
    const result = await getUser();
    if (result.data.hasOwnProperty("error")) {
      return "error";
    } else {
      setUser(result.data.user);
      return result.data.user;
    }
  }
  //-----------------------------------------------------------------
  //loginFunction -- takes user input from registration form and enters user
  // into database. Then if userauthenticated sets user state to user information

  async function registerFunction({ email, password, firstName, lastName }) {
    async function getUser() {
      const result = await axios.post("http://localhost:3001/user/register", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });
      return result;
    }
    const result = await getUser();
    if (result.data.hasOwnProperty("error")) {
      return "error";
    } else {
      setUser(result.data.success);
      return result.data.success;
    }
  }

  //-----------------------------------------------------------------
  return (
    <div>
      <h1 className="text-light fixed-top bg-primary py-3 mb-3">
        Plane Spotter {}
      </h1>

      <div className="App">
        <BrowserRouter>
          <Navbar user={user} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginForm loginFunction={loginFunction} />
            </Route>
            <Route exact path="/register">
              <RegisterForm registerFunction={registerFunction} />
            </Route>
            <Route exact path="/logout">
              <Logout setUser={setUser} />
            </Route>
            <Route exact path="/logbook">
              <Logbook user={user} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
