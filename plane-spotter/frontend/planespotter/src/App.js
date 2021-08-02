import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <h1> Plane Spotter App</h1>

      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
