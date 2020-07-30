/*
 * @Author: 郑萍
 * @Date: 2020-07-29 16:59:32
 * @LastEditTime: 2020-07-29 17:37:55
 * @FilePath: \react-app-template\src\action\user.js
 */

import { USER_LOGIN } from './constants';

export const login = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: USER_LOGIN,
        userInfo: {
          name: 'zp'
        }
      })
    }, 2000)
  };
}