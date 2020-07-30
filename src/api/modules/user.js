/*
 * @Author: 郑萍
 * @Date: 2020-07-30 13:41:47
 * @LastEditTime: 2020-07-30 13:56:05
 * @FilePath: \react-app-template\src\api\modules\user.js
 */
import base from '../base';
import { getData } from '../../utils/http';

const { baseUrl, user } = base;
const users = {
  getUser: () => {
    return getData(baseUrl + user);
  }
}

export default { users };