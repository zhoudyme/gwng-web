const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years: [],    //存放学年信息的变量
    yearIndex: 0,    //选择学年信息的下标
    terms: ["", "第一学期", "第二学期"],    //存放学期信息的变量
    termIndex: 0,    //选择学期信息的下标
    courseProperty: ["", "公共选修课", "专业必修课", "通选课", "专业通选课", "学科基础课", "实践环节", "专业基础课", "必修课",
      "专业方向必修课", "实践教学", "公共基础课", "学科必修课", "全院必修课", "学科基础必修课", "辅修课", "大学外语教育课",
      "通识教育必修课", "英语教育课", "通识教育选修课", "大学外语教育必修课"],   //存放课程性质信息的变量
    coursePropertyIndex: 0,    //选择课程性质信息的下标
    queryTypeItems: [   //存放查询类型信息的变量
      { name: '学期成绩', value: '0' },
      { name: '学年成绩', value: '1', checked: true },
      { name: '历年成绩', value: '2' }
    ],    
    queryTypeIndex: 1,    // //选择查询类型信息的下标，默认为学年成绩
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的成绩'
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
   * 查询成绩
   */
  queryRecord: function (e) {
    var thiz = this;
    var year = thiz.data.years[thiz.data.yearIndex];
    var term = thiz.data.termIndex;
    var courseProperty = thiz.data.courseProperty[thiz.data.coursePropertyIndex];
    var queryType = thiz.data.queryTypeItems[thiz.data.queryTypeIndex].name;
    if (queryType == "学期成绩" && term == '0') {
      wx.showModal({
        content: '学期不能为空',
        showCancel: false
      })
      return;
    }
    wx.request({
      url: app.globalData.host + 'record/index.do',
      data: {
        year: year,
        term: term,
        courseProperty: courseProperty,
        queryType: queryType
      },
      header: app.globalData.header,
      method: 'get',
      success: function (res) {
        if (res.data.success) {
          console.log("成绩信息:" + res.data.data)
          if (res.data.data == null) {
            wx.showModal({
              content: '抱歉，你目前没有成绩信息',
              showCancel: false,
            })
            return;
          } else {
            // 把要传递的json对象转换成字符串
            var recordInfo = JSON.stringify(res.data.data);
            wx.navigateTo({
              url: 'record/record?recordInfo=' + recordInfo
            })
          }
        }else{
          wx.showModal({
            content: '获取成绩信息失败',
            showCancel: false
          })
          return;
        }
      },
      fail: function (res) {
        wx.showModal({
          content: '网络连接异常',
          showCancel: false,
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
  },

  /**
   * 设置课程性质更改后的值
   */
  bindCoursePropertyChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      coursePropertyIndex: e.detail.value
    })
  },

  /**
   * 设置查询类型更改后的值
   */
  bindQueryTypeChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var queryTypeItems = this.data.queryTypeItems;
    for (var i = 0, len = queryTypeItems.length; i < len; ++i) {
      queryTypeItems[i].checked = queryTypeItems[i].value == e.detail.value;
    }

    this.setData({
      queryTypeItems: queryTypeItems,
      queryTypeIndex: e.detail.value
    });
  }
})