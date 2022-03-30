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
        ],
        showList: []
    },

    // 页面创建时执行
    onLoad: function (options) {
        this.setData({showList: this.data.orderList})
    },

    // 页面出现在前台时执行
    onShow: function () {

    },

    // 筛选显示全部订单
    selectAll: function() {
        console.log("筛选显示全部");
        var localShowList = [];
        for (let i=0; i<this.data.orderList.length; i++) {
            localShowList.push(this.data.orderList[i])
        }
        this.setData({showList : localShowList})
    },

    // 筛选显示进行中订单，包括备餐中与待取餐
    selectInProgress: function() {
        console.log("筛选显示进行中");
        var localShowList = [];
        for (let i=0; i<this.data.orderList.length; i++) {
            if (this.data.orderList[i].state === "备餐中" ||
                this.data.orderList[i].state === "待取餐") {
                localShowList.push(this.data.orderList[i])
            }
        }
        this.setData({showList : localShowList})
    },

    // 筛选显示已结束订单，包括已完成和已过期
    selectFinished: function() {
        console.log("筛选显示已结束");
        var localShowList = [];
        for (let i=0; i<this.data.orderList.length; i++) {
            if (this.data.orderList[i].state === "已完成" ||
                this.data.orderList[i].state === "已过期") {
                localShowList.push(this.data.orderList[i])
            }
        }
        this.setData({showList : localShowList})
    },

})