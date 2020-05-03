# 毕设作品 —— 基于微信小程序的教务管理系统前端

使用Java的HttpClient网络编程工具来模拟登录学校PC端正方教务管理系统，通过发送Get或Post请求，抓取返回的HTTP数据包并分析，获取目标数据，将获取的数据处理后在微信小程序上面呈现给用户，并再将用户提交的数据返回PC端教务管理系统，从而实现用户与教务管理系统的交互。

## [Spring后台](https://github.com/zhoudyme/gwng)
## 基本上实现了9个模块
1. 我的信息
2. 校园电话
3. 南商全景
4. 选课情况
5. 课程表
6. 成绩单
7. 校园卡
8. 考勤记录
9. 图书馆

![系统结构图](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E7%B3%BB%E7%BB%9F%E7%BB%93%E6%9E%84%E5%9B%BE.png)

## 具体功能

![学生登录页面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%AD%A6%E7%94%9F%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png)
![程序主页面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E7%A8%8B%E5%BA%8F%E4%B8%BB%E9%A1%B5%E9%9D%A2.png)

### 1. 我的信息
该模块显示在线用户的个人信息，包括学号、姓名、性别、学院、专业、学制、学籍状态、是否在校、入学日期、已修学分、应修学分信息，帮助学生了解自己在学校的状态信息。

![个人信息界面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E6%88%91%E7%9A%84%E4%BF%A1%E6%81%AF/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png)

### 2. 校园电话
该模块显示学校各个单位包括教务处、学生处、团委、图书馆、网络中心、各大学院办公室的联系方式，让学生能够便捷的与各个单位取得联系。

![校园电话界面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E6%A0%A1%E5%9B%AD%E7%94%B5%E8%AF%9D/%E6%A0%A1%E5%9B%AD%E7%94%B5%E8%AF%9D%E7%95%8C%E9%9D%A2.png)

### 3. 南商全景
该模块以AR全景的方式把学校的各个地点呈现出来，方便新生快速了解校园，同时也将校园的美丽景色足不出户呈现给在校学生，让学生对校园有更加深入的了解。

![南商全景界面界面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E6%BC%AB%E6%B8%B8%E5%8D%97%E5%95%86/%E5%8D%97%E5%95%86%E5%85%A8%E6%99%AF%E7%95%8C%E9%9D%A2.png)

### 4. 选课情况
该模块可以让学生查看各个学期选修的课程情况，包括课程名称、课程性质、课程学分等关键信息，帮助学生了解自己的以修课程，变被动为主动，对未来学习有更加明确的规划。

![选课情况界面1](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E9%80%89%E8%AF%BE%E6%83%85%E5%86%B5/%E9%80%89%E8%AF%BE%E6%83%85%E5%86%B5%E7%95%8C%E9%9D%A21.png)
![选课情况界面2](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E9%80%89%E8%AF%BE%E6%83%85%E5%86%B5/%E9%80%89%E8%AF%BE%E6%83%85%E5%86%B5%E7%95%8C%E9%9D%A22.png)

### 5. 课程表
该模块让学生以最快速度查看本周课程的名称、上课地点、上课时间，以对近期的学习有明确的规划。

![课程表信息界面1](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E8%AF%BE%E7%A8%8B%E8%A1%A8/%E8%AF%BE%E7%A8%8B%E8%A1%A8%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A21.png)
![课程表信息界面2](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E8%AF%BE%E7%A8%8B%E8%A1%A8/%E8%AF%BE%E7%A8%8B%E8%A1%A8%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A22.png)

### 6. 成绩单
该模块可以让学生查询在校期间所有课程的成绩情况，可以以学年或学期的方式进行筛选查询，以便了解当前或者往年是否存在不及格的科目。

![成绩单信息界面1](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E6%88%90%E7%BB%A9%E5%8D%95/%E6%88%90%E7%BB%A9%E5%8D%95%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A21.png)
![成绩单信息界面2](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E6%88%90%E7%BB%A9%E5%8D%95/%E6%88%90%E7%BB%A9%E5%8D%95%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A22.png)

### 7. 校园卡
该模块显示学生的校园卡信息，包括卡号、卡状态、余额、昨日消费、一周消费等信息、使学生快速了解自己校园卡信息，避免因余额不足等情况影响在校正常生活。

![校园卡信息界面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E6%A0%A1%E5%9B%AD%E5%8D%A1/%E6%A0%A1%E5%9B%AD%E5%8D%A1%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png)

### 8. 考勤记录
该模块一目了然得呈现出学生最近课程的考勤情况，让学生对自己的考勤信息知根知底，避免因为迟到或逃课过多而受到老师或学校处罚。

![校园卡信息界面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E8%80%83%E5%8B%A4%E8%AE%B0%E5%BD%95/%E8%80%83%E5%8B%A4%E8%AE%B0%E5%BD%95%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png)

### 9. 图书馆
该模块包括在线查询个人在图书馆的书籍借阅信息以及图书馆的书籍信息，还提供了图书馆图书借阅排行榜，方便学生了解图书信息，借书不再迷茫。

![我的借阅信息界面](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%9B%BE%E4%B9%A6%E9%A6%86/%E6%88%91%E7%9A%84%E5%80%9F%E9%98%85%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A2.png)

![图书馆图书搜索界面1](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%9B%BE%E4%B9%A6%E9%A6%86/%E5%9B%BE%E4%B9%A6%E9%A6%86%E5%9B%BE%E4%B9%A6%E6%90%9C%E7%B4%A2%E7%95%8C%E9%9D%A21.png)
![图书馆图书搜索界面2](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%9B%BE%E4%B9%A6%E9%A6%86/%E5%9B%BE%E4%B9%A6%E9%A6%86%E5%9B%BE%E4%B9%A6%E6%90%9C%E7%B4%A2%E7%95%8C%E9%9D%A22.png)
![图书馆图书搜索界面3](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%9B%BE%E4%B9%A6%E9%A6%86/%E5%9B%BE%E4%B9%A6%E9%A6%86%E5%9B%BE%E4%B9%A6%E6%90%9C%E7%B4%A2%E7%95%8C%E9%9D%A23.png)

![图书借阅排行榜信息界面1](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%9B%BE%E4%B9%A6%E9%A6%86/%E5%9B%BE%E4%B9%A6%E5%80%9F%E9%98%85%E6%8E%92%E8%A1%8C%E6%A6%9C%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A21.png)
![图书借阅排行榜信息界面2](https://github.com/zhoudyme/gwng-web/blob/master/screenshot/%E5%9B%BE%E4%B9%A6%E9%A6%86/%E5%9B%BE%E4%B9%A6%E5%80%9F%E9%98%85%E6%8E%92%E8%A1%8C%E6%A6%9C%E4%BF%A1%E6%81%AF%E7%95%8C%E9%9D%A22.png)

