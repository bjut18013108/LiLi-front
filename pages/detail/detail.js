// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsName:"鸡丁黄瓜盖饭套餐",
        ID:"F0000001",
        price: 10.2,
        time: "19:30 - 20:00",
        detailList: [
            {
                detail: "1. 两荤一素, 菜品随机，二两米饭共600克。"
            },
            {
                detail: "2. 请确保在规定时间内取餐，过时订单自动取消。多次购买不取将影响信誉值！"
            },
            {
                detail: "3. 不退不换。"
            }
        ]
    },

    purchase : function (e) {
        let goodsID = e.currentTarget.dataset.name;
        console.log("selected goods ID: "+goodsID);
        // wx.navigateTo({
        //     url: '/pages/shop/shop'
        // })
    }

})