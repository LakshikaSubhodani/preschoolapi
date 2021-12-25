import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

import {BrowserRouter, Switch ,Route} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
