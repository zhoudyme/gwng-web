const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    logoUrl: '../../assets/images/logo.png',    //登录页的学校logo
    mode: 'aspectFit',    //图片缩放模式
    studentNo: '',    //存放学号的变量
    password: '',    //存放密码的变量
    flag: false    //记录输入校验是否成功的变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //实例化输入校验对象并设置参数
    this.WxValidate = app.wxValidate({
      studentNo: {
        required: true,
        number: true,
      },
      password: {
        required: true,
      },
    }, {
        studentNo: {
          required: '请输入学号',
          number: '请输入有效的学号'
        },
        password: {
          required: '请输入密码'
        },
      })
  },

  /**
   * 登录时输入校验
   */
  loginForm(e) {
    var thiz = this
    const params = e.detail.value
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      thiz.flag = false
    } else {
      thiz.flag = true
    }
  },

  /**
   * 封装弹出框方法
   */
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
    return
  },

  /**
   * 设置学号
   */
  studentNoInput: function (e) {
    this.setData({
      studentNo: e.detail.value
    })
  },

  /**
   * 设置密码
   */
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  
  /**
   * 登录
   */
  login: function () {
    var thiz = this;
    if (thiz.flag) {
      wx.request({
        url: app.globalData.host + 'index/index.do',
        data: {
          studentNo: thiz.data.studentNo,
          password: thiz.data.password
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        success: function (res) {
          console.log(res.data);
          if (res.data.success) {
            app.globalData.studentNo = thiz.data.studentNo;
            app.globalData.header.Cookie = 'JSESSIONID=' + res.data.data;
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            })
            wx.switchTab({
              url: '../index/index'
            })
          } else {
            thiz.showModal({
              msg: '学号或密码错误',
            })
            return;
          }
        },
        fail: function (res) {
          thiz.showModal({
            msg: '网络连接异常',
          })
          return;
        }
      })
    }
  }
})
