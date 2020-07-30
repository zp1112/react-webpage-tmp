/*
 * @Author: 郑萍
 * @Date: 2020-07-29 16:46:10
 * @LastEditTime: 2020-07-29 17:05:54
 * @FilePath: \react-app-template\src\reducer\index.js
 */
import { combineReducers } from 'redux';
import user from './user';

const rootReducers = combineReducers({
  user
});
export default rootReducers;