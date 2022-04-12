// pages/selectResults/selectResults.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList : [
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

    // 点击商品处理函数
    selectGood : function(e) {
        let id = e.currentTarget.dataset.id;
        console.log("选中商品：" + id)
        for (let good of this.data.goodsList) {
            if (good.id === id && good.remain === 0) {
                wx.showToast({
                    title: '商品已售罄',
                    icon: 'none',
                    duration: 1000
                })
                return
            }
        }
        wx.navigateTo({
          url: '/pages/detail/detail',
        })
    }
})