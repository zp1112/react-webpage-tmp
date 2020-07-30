/*
 * @Author: 郑萍
 * @Date: 2020-07-30 13:43:30
 * @LastEditTime: 2020-07-30 13:44:21
 * @FilePath: \react-app-template\src\utils\http.js
 */
export function getData(url) {
  return fetch(url);
}
export function postData(url, data) {
  return fetch(url, {
    method: 'post',
    data
  });
}