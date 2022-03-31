// pages/shop/shop.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopName: "东区食堂",
        addr:"学校南门进来第二个路口左拐到头",
        openingHour: "00:00 - 24:00",
        goodsList: [
            {
                id: "good001",
                name: "鸡丁黄瓜盖饭套餐",
                picName: "../../statics/goods/goods1.png",
                price: "10.00",
                remain: 6,
                sales: 31,
            },

            {
                id: "good002",
                name: "剁椒炒鸡蛋",
                picName: "../../statics/goods/goods2.png",
                price: "15.00",
                remain: 0,
                sales: 14,
            },
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
    selectGood : function(e) {
        let id = e.currentTarget.dataset.id;
        console.log("选中商品：" + id)
    }
 
})