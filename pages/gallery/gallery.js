// pages/gallery/gallery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures: []
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
    this.setData({
      pictures: [
        'http://pic1.win4000.com/wallpaper/7/51b1476692fca.jpg',
        'http://pic4.bbzhi.com/dongwubizhi/keaixiaomaomikuanpingbizhi/keaixiaomaomikuanpingbizhi_491200_11.jpg',
        'http://pic1.win4000.com/wallpaper/4/573fd5bd3bb56.jpg',
        'http://pic1.win4000.com/wallpaper/7/5264c2769b572.jpg',
        'http://pic1.win4000.com/wallpaper/8/57c79ed43b2bc.jpg',
        'http://www.ztkm.com/uploads/allimg/120422/2012042310235362068.jpg',
        'http://pic5.bbzhi.com/dongwubizhi/keaiwubikuanpingxiaodongwubizhixia/keaiwubikuanpingxiaodongwubizhixia_433377_9.jpg',
        'http://old.bz55.com/uploads/allimg/160705/140-160F5111221.jpg'
      ]
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var urls = this.data.pictures;
    console.log(e);
    wx.previewImage({
      current: current,
      urls: urls
    })
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