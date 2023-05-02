import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import ReactDOM from 'react-dom';

import { LaunchDarklyProvider } from './providers/LaunchDarkly/LaunchDarkly';

import { LoginScreen } from './screens/login';
import { DashboardScreen } from './screens/dashboard';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LaunchDarklyProvider>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route component={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </LaunchDarklyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
