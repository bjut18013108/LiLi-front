
Page({

    data:{
        // 搜索框值
        inputVal: "",

        // 推荐商品列表
        recomItemList: [{
                "name": "推荐商品1",
                "picName": "item0"
            },
            {
                "name": "推荐商品2",
                "picName": "item1"
            },
            {
                "name": "推荐商品3",
                "picName": "item2"
            },
        ],

        // 商家列表
        shopList: [{
                "name": "商家1",
                "picName": "shop0",
                "openingHour": "00:00 - 24:00"
            },
            {
                "name": "商家2",
                "picName": "shop1",
                "openingHour": "00:00 - 24:00"
            },
            {
                "name": "商家3",
                "picName": "shop2",
                "openingHour": "00:00 - 24:00"
            },
        ]
    },

    onLoad: function() {
        // 页面创建时执行
        console.log("main page loaded!")
    },

    onShow: function() {
        // 页面出现在前台时执行
        console.log("main page shown!")
    },

    // 键盘抬起事件
    inputTyping: function (e) {
        console.log(e.detail.value)
        var that = this;
        if (e.detail.value == '') {
            return;
        }
        that.setData({
            inputVal: e.detail.value
        });
    },

    // 所搜按钮事件处理函数
    searchBtnAction: function () {
        console.log(this.data.inputVal);
        wx.navigateTo({
            url: '/pages/logs/logs'
        })
    },

    // 选中推荐商品事件处理函数 
    selectItem: function (e) {
        let itemName = e.currentTarget.dataset.name;
        console.log("selected item: "+itemName);
        wx.navigateTo({
            url: '/pages/goods/goods'
        })
    },

    // 选中商家事件处理函数
    selectShop: function (e) {
        let shopName = e.currentTarget.dataset.name;
        console.log("selected shop: "+shopName);
        wx.navigateTo({
            url: '/pages/shop/shop'
        })
    }
})