/*
 * @Author: 郑萍
 * @Date: 2020-07-29 16:56:12
 * @LastEditTime: 2020-07-29 17:08:56
 * @FilePath: \react-app-template\src\reducer\user.js
 */
import { USER_LOGIN } from '../action/constants';

const initialState = {
  isLogin: false,
  userInfo: null
}


export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        userInfo: action.userInfo,
        isLogin: true
      }
    default: return state;
  }
}