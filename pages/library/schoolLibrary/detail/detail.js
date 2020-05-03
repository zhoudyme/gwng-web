const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    book: []    //存放图书详情的变量
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '图书详情'
    }),
    this.getBookInfo(options)
  },

  /**
   * 查询图书详情
   */
  getBookInfo: function (options) {
    var thiz = this;
    wx.request({
      url: app.globalData.host + 'library/getBookDetail.do',
      data: {
        id: options.bookId,
      },
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        if (res.data.success) {
          thiz.setData({
            book: res.data.data,
          })
        }
        console.log("图书信息:" + thiz.data.book);
      },
      fail: function (res) {
        wx.showModal({
          content: '网络连接异常',
          showCancel: false
        })
        return
      }
    })
  },
})