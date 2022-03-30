// pages/shop/shop.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopName: "东区食堂",
        openingHour: "00:00 - 24:00",
        goodsList: [
            {
                name: "鸡丁黄瓜盖饭套餐",
                picName: "pic1",
                price: 10.00,
                sales: 100,
            }
        ]
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

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    // 点击商品处理函数
    selectGood : function() {

    }
 
})