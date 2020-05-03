const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],    //存放搜索图书结果的变量
    bookName: '',    //存放存放搜索图书名称的变量
    page: ''    //分页信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '图书详情'
    }),
    this.getLibSearch(options)
  },

  /**
   * 查询搜索的图书信息
   */
  getLibSearch: function (options) {
    var thiz = this;
    console.log(options.page)
    wx.request({
      url: app.globalData.host + 'library/getSearchList.do',
      data: {
        bookName: options.bookName,
        page: options.page
      },
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        if (res.data.success) {
          thiz.setData({
            books: res.data.data,
            bookName: options.bookName,
            page: options.page
          })
        } else {
          wx.showModal({
            content: '搜索图书失败',
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
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //设置分页信息
    this.setData({ page: parseInt(this.data.page) + 1 })
    let arr = { bookName: this.options.bookName, page: this.data.page }
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.getLibSearch(arr)
  }
})