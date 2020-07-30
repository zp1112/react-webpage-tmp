/*
 * @Author: 郑萍
 * @Date: 2020-07-29 17:13:37
 * @LastEditTime: 2020-07-29 17:21:02
 * @FilePath: \react-app-template\src\utils\auth.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function WithAuth(Comp) {
  class Auth extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount = () => {
      console.log(9888, this.props.isLogin)
    }

    render() {
      return (this.props.isLogin ? <Comp /> : <Redirect to="/login" />);
    }
  }
  const mapStateToProps = (state) => {
    return {
      isLogin: state.user.isLogin
    }
  }
  return new connect(mapStateToProps)(Auth)
}

export default WithAuth;