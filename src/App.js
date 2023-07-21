import NavBar from "./component/NavBar";
import "./App.css";
import React, { Component } from "react";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <NavBar/>
         <Switch>
          <Route path="/"><News pageSize={8} county = "in" category="General" /></Route>
          <Route path="/Business"><News pageSize={8} county = "in" category="Business" /></Route>
          <Route path="/Entertainment"><News pageSize={8} county = "in" category="Entertainment" /></Route>
          <Route path="/General"><News pageSize={8} county = "in" category="General" /></Route>
          <Route path="/Health"><News pageSize={8} county = "in" category="Health" /></Route>
          <Route path="/Science"><News pageSize={8} county = "in" category="Science" /></Route>
          <Route path="/Sport"><News pageSize={8} county = "in" category="Sport" /></Route>
          <Route path="/Technology"><News pageSize={8} county = "in" category="Technology" /></Route>
          </Switch>
        </Router>
      </div>

    );
  }
}
