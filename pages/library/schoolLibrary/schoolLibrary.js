const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookListInfo: '',    //存放借阅排行榜的变量
    bookName:''    //存放搜索图书的变量
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '图书馆藏'
    })
    this.getLibList();
  },

  //设置搜索图书信息
  bookNameInput: function (e) {
    this.setData({
      bookName: e.detail.value
    })
  },

  /**
   * 查询图书借阅排行榜
   */
  getLibList: function () {
    var thiz=this;
    wx.request({
      url: app.globalData.host + 'library/getBorrowList.do',
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        console.log("图书借阅信息:" + res.data.data);
        if (res.data.success) {
          thiz.setData({
            bookListInfo: res.data.data,
          })
        } else {
          wx.showModal({
            content: '获取借阅排行榜失败',
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
   * 图书搜索
   */
  search: function () {
    if (!this.data.bookName) {
      wx.showModal({
        content: '请输入书名，例如：追风筝的人',
        showCancel: false
      })
    } else {
      wx.navigateTo({
        url: 'search/search?bookName=' + this.data.bookName + '&page=1'
      })
    }
  }
})