/*
 * @Author: 郑萍
 * @Date: 2020-07-30 13:46:48
 * @LastEditTime: 2020-07-30 14:00:54
 * @FilePath: \react-app-template\src\api\index.js
 */
let importAll = require.context('./modules', false, /\.js$/)

// !只需要在modules下面添加相应的方法即可自动export
class Api {
  constructor() {
    //importAll.keys()为模块路径数组
    importAll.keys().map(path => {
      //兼容处理：.default获取ES6规范暴露的内容; 后者获取commonJS规范暴露的内容
      let api = importAll(path).default || importAll(path)
      Object.keys(api).forEach(key => this[key] = api[key])
    })
  }
}
export default new Api();