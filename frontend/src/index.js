import  {BrowserRouter,Route, Redirect, Switch}  from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";


// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss";
import "./assets/demo/demo.css";
// pages

import LandingPage from "./views/pages/LandingPage.js";
import ProfilePage from "./views/pages/ProfilePage.js";
import RegisterPage from "./views/pages/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Redirect to="/profile-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
