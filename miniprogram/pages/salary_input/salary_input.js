// 导入税务计算逻辑
const tax = require('../../common/tax_calc.js')

const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 获取城市列表
    cities: Object.keys(tax.cityData),

    // 从globalData里面获取默认城市和薪水
    cityIndex: app.globalData.city,
    salary: app.globalData.salary,
  },

  // 当改变文本框的时候触发
  bindInputChange: function (e) {
    console.log('input 改变，携带值为', Number(e.detail.value));
    // 刷新前端
    this.setData({
      salary: Number(e.detail.value)
    })
  },

  // 当改变滑动条的时候触发
  bindSliderChange: function (e) {
    console.log('input 改变，携带值为', e.detail.value);
    // 刷新前端
    this.setData({
      salary: e.detail.value
    })
  },

  // 当改变城市的时候触发
  bindCityChange: function (e) {
    console.log('picker city 发生选择改变，携带值为', e.detail.value);
    // 刷新前端
    this.setData({
      cityIndex: e.detail.value
    })
  },

  // 按键点击事件
  bindTap: function () {
    app.globalData.salary = this.data.salary;
    app.globalData.city = this.data.cityIndex;

    wx.navigateTo({
      url: '../result_page/result_page'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})