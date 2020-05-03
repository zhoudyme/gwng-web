var app = getApp()
var routes = require('routes');    //引入routes.js
Page({
  data: {
    imgUrls: [    //存放首页轮播图的图片
      '../../assets/images/slide/1.jpg',
      '../../assets/images/slide/2.jpg',
      '../../assets/images/slide/3.jpg',
      '../../assets/images/slide/4.jpg',
      '../../assets/images/slide/5.jpg'
    ],
    indicatorDots: false,  //是否显示面板指示点
    autoplay: true,  //是否自动切换
    interval: 3000,  //自动切换时间间隔
    duration: 1000,  //滑动动画时长
    cellHeight: '120px',    //九宫格格子高度
    pageItems: []    //记录九宫格的信息
  } ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this

    //绘制首页九宫格
    var pageItems = [];
    var row = [];
    var len = routes.PageItems.length;//重组PageItems  
    len = Math.floor((len + 2) / 3) * 3;
    for (var i = 0; i < len; i++) {
      if ((i + 1) % 3 == 0) {
        row.push(routes.PageItems[i]);
        pageItems.push(row);
        row = [];
        continue;
      }
      else {
        row.push(routes.PageItems[i]);
      }
    }
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        that.setData({
          cellHeight: (windowWidth / 3) + 'px'
        })
      },
      complete: function () {
        that.setData({
          pageItems: pageItems
        })
      }
    })

  }
})
