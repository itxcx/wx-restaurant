// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'payorder',
    index: 0,
    allMoney: 582.02,
    order: {
      restaurant: '人马大饭堂',
      count: 5,
      number: '20170326122',
      time: '2017/3/26 13:23:02',
      goods: [
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        }
      ],
      allMoney: 582.02,
      concessional: ['不使用优惠券', '满100减20', '满100减30', '满300减10', '满500优惠5折'],
      delMoney: [0, -20, -30, -100, 0.5]
    }
  },
  /**
   * 优惠券选择
   */
  concessionalChange (e) {
    // console.log(this.data.allMoney + (this.data.order.delMoney[e.detail.value]))
    if (this.data.order.delMoney[e.detail.value] < 1 && this.data.order.delMoney[e.detail.value] > 0) {
      this.data.order.allMoney = this.data.allMoney * this.data.order.delMoney[e.detail.value]
    } else {
      this.data.order.allMoney = (this.data.allMoney + (this.data.order.delMoney[e.detail.value]))
    }
    this.setData({
      index: e.detail.value,
      order: this.data.order
    })
  },
  /**
   * 小数点后两位
   * @param floatvar
   * @returns {*}
   */
  changeTwoDecimalf  (floatvar) {
    var fx = parseFloat(floatvar)
    if (isNaN(fx)) {
      return false
    }
    fx = Math.round(fx * 10000) / 100.00
    var sx = fx.toString()
    var posdecimal = sx.indexOf('.')
    if (posdecimal < 0) {
      posdecimal = sx.length
      sx += '.'
    }
    while (sx.length <= posdecimal + 2) {
      sx += '0'
    }
    return sx
  },
  /**
   * 支付货款
   */
  payMoney () {
    // todo 付款流程
    // wx.requestPayment({
    //   'timeStamp': '',
    //   'nonceStr': '',
    //   'package': '',
    //   'signType': 'MD5',
    //   'paySign': '',
    //   'success':function(res){
    //   },
    //   'fail':function(res){
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
