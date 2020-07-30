/*
 * @Author: 郑萍
 * @Date: 2020-07-29 17:30:04
 * @LastEditTime: 2020-07-29 17:35:39
 * @FilePath: \react-app-template\src\pages\Login\index.js
 */
/*
 * @Author: 郑萍
 * @Date: 2020-07-29 17:30:04
 * @LastEditTime: 2020-07-29 17:33:53
 * @FilePath: \react-app-template\src\pages\Login\inedx.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../action/user';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.userActions.login();
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>Login</div>
    );
  }
}
const mapStateToProps = state => {
  return {


  }
}
const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);