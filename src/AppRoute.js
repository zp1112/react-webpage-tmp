/*
 * @Author: 郑萍
 * @Date: 2020-07-29 16:40:37
 * @LastEditTime: 2020-07-29 17:44:58
 * @FilePath: \react-app-template\src\App.js
 */
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import WithAuth from './utils/auth';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css';

function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/user" component={WithAuth(User)}></Route>
        <Route exact path="/404" component={NotFound}></Route>
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default AppRoute;
