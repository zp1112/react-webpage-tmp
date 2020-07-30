/*
 * @Author: 郑萍
 * @Date: 2020-07-29 17:45:49
 * @LastEditTime: 2020-07-29 17:47:36
 * @FilePath: \react-app-template\src\App.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// 用于做一些初始化store的事情
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>{this.props.children}</>
    );
  }
}

export default connect()(App);