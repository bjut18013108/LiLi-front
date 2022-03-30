// pages/orders/orders.js
Page({


    data: {
        orderList: [
            {
                picName: "../../statics/goods/goods1/1.png",
                addr: "西区食堂",
                state: "备餐中",
                color: "rgb(245, 218, 120)",
                time: "19:30 - 20:00",
                price: "8.5",
                cdkey: "LL888",
            },

            {
                picName: "../../statics/goods/goods1/1.png",
                addr: "第一留学餐厅",
                state: "待取餐",
                color: "rgb(178, 215, 217)",
                time: "19:30 - 20:00",
                price: "8.5",
                cdkey: "LL888",
            },

            {
                picName: "../../statics/goods/goods1/1.png",
                addr: "西区食堂",
                state: "已完成",
                color: "rgb(124, 223, 161)",
                time: "19:30 - 20:00",
                price: "8.5",
                cdkey: "LL888",
            },

            {
                picName: "../../statics/goods/goods1/1.png",
                addr: "西区食堂",
                state: "已过期",
                color: "rgb(233, 88, 84)",
                time: "19:30 - 20:00",
                price: "8.5",
                cdkey: "LL888",
            }
        ]
    },


    onLoad: function (options) {

    },


    onShow: function () {

    },

    // 筛选显示全部订单
    selectAll: function() {

    },

    // 筛选显示进行中订单，包括备餐中与待取餐
    selectAll: function() {

    },

    

})