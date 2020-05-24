import React from 'react'
import  {BrowserRouter,Route, Redirect, Switch}  from "react-router-dom"

import ProfilePage from "../pages/profilePage";
import Home from "../pages/home.js";
import LoginPage from "../pages/Login/signin/index";


import {isAuthenticated} from '../services/auth'
import SignUp from '../pages/Login/signup/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
      )
    }
  />
)

export default props=>(
  <BrowserRouter>
    <Switch>
      <Route
        path="/home"
        render={props => <Home {...props} />}
      />
      <PrivateRoute
        path="/acess/profile-page"
        render={props => <ProfilePage {...props} />}
      />

      <Route
        path="/login/signup-page"
        render={props => <SignUp {...props} />}
      />
      <Route
        path="/login/signin-page"
        render={props => <LoginPage {...props} />}
      />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)
