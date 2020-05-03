const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableInfo: [],    //存放课表信息的标量    
    showView: false,    //是否显示课程表格
    flag: true,   //记录当前是否有课程信息的变量
    years: [],    //存放学年信息的变量
    yearIndex: 0,    //选择学年信息的下标
    terms: ["第一学期", "第二学期"],    //存放学期信息的变量
    termIndex: 0,    //选择学期信息的下标
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '我的课表'
    })
    this.getCurrentTerm();
    this.queryTableInfo();
    this.data.flag = false;
    showView: (options.showView == "true" ? true : false);   
  },

  /**
   * 查询学年信息,如果全局变量years里面已经有信息了，则不发起网络请求，
   * 否则请求成功后把信息放入全局变量years，避免重复查询
   */
  getCurrentTerm: function (e) {
    var thiz = this;
    thiz.setData({
      years: app.globalData.years
    })
    if (thiz.data.years.length == 0) {
      wx.request({
        url: app.globalData.host + 'course/getCurrentTerm.do',
        header: app.globalData.header,
        method: 'get',
        success: function (res) {
          console.log("学年:" + res.data.data)
          if (res.data.success) {
            app.globalData.years = res.data.data
            thiz.setData({
              years: app.globalData.years
            })
          } else {
            wx.showModal({
              content: '获取学年信息失败',
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
  },

  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },

  /**
   * 查询课程表信息
   */
  queryTableInfo: function (e) {
    var thiz = this;
    var year = '';
    var term = '';
    if (thiz.data.flag != true) {
      year = thiz.data.years[thiz.data.yearIndex];
      term = thiz.data.termIndex;
    }
    wx.request({
      url: app.globalData.host + 'course/index.do',
      data: {
        year: year,
        term: term,
      },
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        if (res.data.success) {
          console.log(res.data.data)
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，你目前没有课表信息',
              showCancel: false,
            })
            thiz.setData({
              showView: true,
              tableInfo: res.data.data
            })
            return;
          } else {
            thiz.setData({
              showView: false,
              tableInfo: res.data.data
            })
          }
        }

      },
      fail: function (res) {
        wx.showModal({
          content: '获取课表信息失败',
          showCancel: false
        })
        return;
      }
    })
  },
  
  /**
   * 设置学年更改后的值
   */
  bindYearChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      yearIndex: e.detail.value
    })
  },

  /**
   * 设置学期更改后的值
   */
  bindTermChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      termIndex: e.detail.value
    })
  }
})