import React from 'react'
import  {BrowserRouter,Route, Redirect, Switch}  from "react-router-dom"

import ProfilePage from "../pages/profile/index"
import Home from "../pages/home/index"
import LoginPage from "../pages/Login/signin/index"


import {isAuthenticated} from '../services/auth'
import SignUp from '../pages/Login/signup/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login/signin-page", state: { from: props.location } }} />
      )
    }
  />
)

export default props=>(
  <BrowserRouter>
    <Switch>
      <Route
        exact={true} path="/"
        render={props => <Home {...props} />}
      />
      <PrivateRoute
        path="/access/profile-page"
        component={props => <ProfilePage {...props} />}
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
