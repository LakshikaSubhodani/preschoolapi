import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import AddAdmin from "./views/AddAdmin";
import StudentList from "./views/StudentList";

import {BrowserRouter, Switch ,Route} from "react-router-dom";
import AddStudentForm from "./components/AddStudentForm";
import AddAdminForm from "./components/AddAdminForm";

function App() {
  return (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/StudentList" component = {StudentList}/>
        <Route exact path="/AddAdmin" component = {AddAdmin}/>
        <Route exact path="/components/AddStudentForm" component = {AddStudentForm}/>
        <Route exact path="/components/AddAdminForm" component = {AddAdminForm}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
