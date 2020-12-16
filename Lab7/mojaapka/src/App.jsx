import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Lab6 from './App2';
import FreeCodeCamp from './App3';
import Quiz from './App4';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Laboratorium6">Lab 6</Link>
            </li>
            <li>
              <Link to="/freeCodeCamp">freeCodeCamp</Link>
            </li>
            <li>
              <Link to="/Quiz">app3</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Laboratorium6">
            <Lab6 />
          </Route>
          <Route path="/freeCodeCamp">
            <FreeCodeCamp />
          </Route>
          <Route path="/Quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home page</h2>;
}

export default App;