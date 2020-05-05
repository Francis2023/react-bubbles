import React, { useState } from "react";
import { 
  BrowserRouter as Router, 
  Route,
  Redirect,
  Link,
  Switch
 } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li className="navLink">
            <Link to="/login">Login</Link>
          </li>
          <li className="navLink">
            <Link to="/protected">Bubble</Link>
          </li>
        </ul>
        <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
