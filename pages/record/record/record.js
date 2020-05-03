Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordInfo: []    //存放成绩信息的变量
  },
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '我的成绩'
    })
    var thiz = this;
    // 把接收到的字符串转换成json对象
    var recordInfo = JSON.parse(options.recordInfo);
    thiz.setData({
      recordInfo: recordInfo
    })
    console.log(thiz.data.recordInfo)
  },
})  