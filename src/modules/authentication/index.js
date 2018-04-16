import React, { Component } from 'react';
import { Switch, Link } from "react-router-dom";

import UserRoute from '../../routes/UserRoute';
import GuestRoute from '../../routes/GuestRoute';
import asyncComponent from '../../AsyncComponent';

const LoginPage = asyncComponent(() => import("./components/LoginPage"));
const ForgotPasswordPage = asyncComponent(() => import("./components/ForgotPasswordPage"));
const ResetPasswordPage = asyncComponent(() => import("./components/ResetPasswordPage"));


const Authentication = ({location}) => (
  <Switch>
  	<GuestRoute
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPasswordPage}
    />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <GuestRoute
      location={location}
      component={LoginPage}
    />

  </Switch>
);

export default Authentication;
