const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headUrl: '../../assets/images/head/girl.png',    //头像图片,默认为女生头像
    mode: 'aspectFit',    //图片缩放模式
    studentInfo: ''    //存放学生信息的变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '我的信息'
    })
    this.queryStudentInfo()
  },

  /**
   * 查询个人信息
   */
  queryStudentInfo: function () {
    var thiz = this;
    wx.request({
      url: app.globalData.host + 'index/getStudentInfo.do',
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        console.log("个人信息:" + res.data);
        if (res.data.success) {
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，你目前没有个人信息',
              showCancel: false,
            })
            return;
          } else {
            thiz.setData({
              studentInfo: res.data.data
            })
            //如果为男生，则修改头像为男生头像
            if (thiz.data.studentInfo.sex == "男") {
              thiz.setData({
                headUrl: '../../assets/images/head/boy.png'
              })
            }
          }
        } else {
          wx.showModal({
            content: '获取个人信息失败',
            showCancel: false
          })
          return;
        }
      },
      fail: function (res) {
        wx.showModal({
          content: '网络连接异常',
          showCancel: false
        })
        return;
      }
    })
  },
  logout: function () {
    var thiz = this;
    wx.showModal({
      title: '提示',
      content: '确定退出登录？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: app.globalData.host + 'index/logout.do',
            header: app.globalData.header,
            method: 'get',
            success: function (res) {
              console.log("退出登录:" + res.data);
              if (res.data.success) {
                wx.showToast({
                  title: '退出登录成功',
                  icon: 'success',
                  duration: 2000
                }),
                  wx.redirectTo({
                    url: '../login/login'
                  })
              } else {
                wx.showModal({
                  content: '退出登录失败，请重试',
                  showCancel: false
                })
                return;
              }
            },
            fail: function (res) {
              wx.showModal({
                content: '网络连接异常，请稍后再试',
                showCancel: false
              })
              return;
            }
          })
        } else {
          console.log('用户点击取消退出登录')
        }
      }
    })
  }
})