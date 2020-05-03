const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: []    //存放借阅图书的变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '我的借阅'
    }),
    this.queryBookInfo();
  },

  /**
   * 查询借阅图书
   */
  queryBookInfo: function () {
    var thiz = this;
    wx.request({
      url: app.globalData.host + 'library/getMyLibraryInfo.do',
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        console.log("我的借阅信息:" + res.data.success);
        if (res.data.success) {
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，你目前没有借阅信息',
              showCancel: false,
            })
            return;
          } else {
            thiz.setData({
              bookList: res.data.data,
            })
          }
        } else {
          wx.showModal({
            content: '获取图书借阅信息失败',
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
        return
      }
    })
  }
})