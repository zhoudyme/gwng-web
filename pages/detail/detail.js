const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
        console.log("个人详细信息:" + res.data);
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
  }
})