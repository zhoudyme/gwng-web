const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    campusCardInfo: []   //存放校园卡信息的变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '校园卡'
    }),
      this.queryCampusCardInfo();
  },

  /**
   * 查询校园卡信息
   */
  queryCampusCardInfo: function () {
    var thiz = this;
    wx.request({
      url: app.globalData.host + 'campusCard/getCampusCardInfo.do',
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        console.log("校园卡信息:" + res.data);
        if (res.data.success) {
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，你目前没有校园卡信息',
              showCancel: false,
            })
            return;
          }
          else {
            thiz.setData({
              campusCardInfo: res.data.data,
            })
          }
        }
        else {
          wx.showModal({
            content: '获取校园卡信息失败',
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