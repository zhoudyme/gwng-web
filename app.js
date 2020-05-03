/* 引入表单验证工具 */
import wxValidate from 'helpers/WxValidate'

App({
  /* 小程序全局变量 */
  globalData: {
    host: 'http://localhost:8080/gwng/',
    header: { 'content-type': 'application/x-www-form-urlencoded', 'Cookie': '' },
    years: []
  },
  wxValidate: (rules, messages) => new wxValidate(rules, messages)
})