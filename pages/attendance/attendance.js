const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attendanceInfo: []    //存放考勤信息的变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '考勤信息'
    }),
      this.queryAttendandeInfo();
  },

  /**
   * 查询考勤信息
   */
  queryAttendandeInfo: function () {
    var thiz = this;
    wx.request({
      url: app.globalData.host + 'attendance/getAttendanceInfo.do',
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        console.log("考勤信息:" + res.data.data);
        if (res.data.success) {
          if (res.data.data == null || res.data.data == '') {
            wx.showModal({
              content: '抱歉，你目前没有考勤信息',
              showCancel: false,
            })
            return;
          }
          else {
            thiz.setData({
              attendanceInfo: res.data.data,
            })
          }
        } else {
          wx.showModal({
            content: '获取考勤信息失败',
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