/*
 * @Author: 郑萍
 * @Date: 2020-07-29 16:44:48
 * @LastEditTime: 2020-07-29 17:05:08
 * @FilePath: \react-app-template\src\store\index.js
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';

export default createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk, logger)));