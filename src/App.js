import React, { Component } from 'react';
import { Switch, Link } from "react-router-dom";

import Authentication from './modules/authentication'

import './assets/css/layout.css';

const App = ({location}) => (
  <Switch>
    <Authentication />
  </Switch>
);

export default App;
