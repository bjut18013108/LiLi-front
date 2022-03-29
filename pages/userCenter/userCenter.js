// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },

  toOrders: function() {
    wx.navigateTo({
      url: '/pages/orders/orders'
    })
  }
})
