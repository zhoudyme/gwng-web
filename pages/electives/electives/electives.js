Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    electivesInfo: []    //存放选课信息的变量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置导航栏标题
    wx.setNavigationBarTitle({
      title: '选课情况'
    })
    var thiz = this;
    // 把接收到的字符串转换成json对象
    var electivesInfo = JSON.parse(options.electivesInfo);
    thiz.setData({
      electivesInfo: electivesInfo
    })
    console.log(thiz.data.electivesInfo)
  },
})  