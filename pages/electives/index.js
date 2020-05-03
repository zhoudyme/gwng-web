const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: [],   //存放学年信息的变量
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
      title: '选课情况'
    })
    this.getCurrentTerm();
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

  /**
   * 查询选课信息
   */
  queryElectivesInfo: function (e) {
    var thiz = this;
    var year = thiz.data.years[thiz.data.yearIndex];
    var term = thiz.data.termIndex;
    wx.request({
      url: app.globalData.host + 'electives/getElectivesInfo.do',
      data: {
        year: year,
        term: term,
      },
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        if (res.data.success) {
          console.log("选课信息:" + res.data.data)
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，你目前没有选课信息',
              showCancel: false,
            })
            return;
          } else {
            // 把要传递的json对象转换成字符串
            var electivesInfo = JSON.stringify(res.data.data);
            //把选课信息转发到显示选课信息的页面
            wx.navigateTo({
              url: 'electives/electives?electivesInfo=' + electivesInfo
            })
          }
        } else {
          wx.showModal({
            content: '获取选课信息失败',
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