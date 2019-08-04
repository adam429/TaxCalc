// miniprogram/pages/result_page/result_page.js
const app = getApp();

// 导入税务计算逻辑
const tax = require('../../common/tax_calc.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    calcTable: [],
    total: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("city=", app.globalData.city);
    console.log("salary=", app.globalData.salary);
    // 计算每个月个税现金流情况
    var calcTable = tax.calcTable(app.globalData.city, app.globalData.salary, 0);
    // 刷新前端
    this.setData({
      calcTable: calcTable,
      total: tax.total(calcTable),
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
