// pages/goods.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsName: "十元套餐",
        goodsID:"goods1",
        goodsPrise: "10\n",
        servingTime: "19:00 -- 19:30",
        servingArea: "西区食堂",
        detail:"\n一荤两素，菜品随机，二两米饭\n 共600g",
        note: "\n1、请确保在规定时间内取餐，过时订单自动取消\n2、买定离手，不退不换\n3、啦啦啦",

        goodsPicList: [{picName: "1"}, {picName: "2"}, {picName: "3"}]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    search: function() {
        wx.navigateTo({
          url: '../mainPage/mainPage',
        })
    }
  
})