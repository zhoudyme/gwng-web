const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '校园电话'
    }),
      this.queryPhone();
  },
  queryPhone: function () {
    var thiz = this;
    wx.request({
      url: app.globalData.host + 'campusPhone/getCampusPhoneInfo.do',
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        console.log("校园电话信息:" + res.data.data);
        if (res.data.success) {
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，目前没有校园电话信息',
              showCancel: false,
            })
            return;
          } else {
            thiz.setData({
              phoneInfo: res.data.data,
            })
          }
        } else {
          wx.showModal({
            content: '获取校园电话信息失败',
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