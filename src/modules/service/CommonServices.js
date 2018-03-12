class Common {
  // 重定向页面
  static handleRedirectPage (page, params = null) {
    if (!params) return (location.href = `${page}.html`)
    let paramsArray = []
    let paramsString = '?'
    for (let key in params) {
      paramsArray.push(`${key}=${params[key]}`)
    }
    paramsString += paramsArray.join('&')
    location.href = `${page}.html${paramsString}`
  }
  static handleSessionStorageUserInfo (data) {
    let key = 'userInfo'
    sessionStorage.setItem('sessionKey', key)
    sessionStorage.setItem(key, JSON.stringify(data))
  }
  static generateSessionStorageUserInfo () {
    // return new Promise((resolve, reject) => {
    //   let sessionKey = sessionStorage.getItem('sessionKey')
    //   let userInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    //   resolve(userInfo)
    // })
    let sessionKey = sessionStorage.getItem('sessionKey')
    let userInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    return userInfo
  }
  static handleSessionStorageUserInfoOut () {
    let sessionKey = sessionStorage.getItem('sessionKey')
    sessionStorage.removeItem(sessionKey)
    this.handleRedirectPage('store')
    // return
  }
  // static handlePay (data) {
  //   if (process.env.NODE_ENV === 'production') {
  //     data.returnUrl = 'https://abupao.com/result.html'
  //   } else {
  //     data.returnUrl = 'http://localhost:8090/result.html'
  //   }
  //   let { amount, orderId, sign, title, returnUrl } = data
  //   console.log(data)
  //   BC.err = (data) => {
  //     // 注册错误信息接受
  //     alert(data['ERROR'])
  //   }
  //   // 需要支付时调用BC.click接口传入参数
  //   BC.click({
  //     title, // 商品名
  //     amount, // 总价（分）
  //     out_trade_no: orderId, // 自定义订单号
  //     sign, // 商品信息hash值，含义和生成方式见下文
  //     return_url: returnUrl // 支付成功后跳转的商户页面,可选，默认为http://payservice.beecloud.cn/spay/result.php
  //     // instant_channel: instantChannel
  //   })
  // }
  static handleCreateTimeText (date) {
    if ((date + '').length < 12) {
      date = Number.parseInt(date + '000')
    }
    let YYYYMMDD = this.handleToYYYYMMDD(new Date(date))
    let HHMMSSMS = this.handleToHHMMSSMS(new Date(date))
    return `${YYYYMMDD.YYYY}-${this.handleToPad(YYYYMMDD.MM)}-${this.handleToPad(YYYYMMDD.DD)} ${this.handleToPad(HHMMSSMS.HH)}:${this.handleToPad(HHMMSSMS.MM)}:${this.handleToPad(HHMMSSMS.SS)}`
  }
  static handleToYYYYMMDD (date) {
    let Year, Month, Day
    Year = date.getFullYear()
    Month = date.getMonth() + 1
    Day = date.getDate()
    return {
      YYYY: Year,
      MM: Month,
      DD: Day
    }
  }
  static handleToHHMMSSMS (date) {
    let Hours, Minutes, Seconds, Milliseconds
    Hours = date.getHours()
    Minutes = date.getMinutes()
    Seconds = date.getSeconds()
    Milliseconds = date.getMilliseconds()
    return {
      HH: Hours,
      MM: Minutes,
      SS: Seconds,
      MS: Milliseconds
    }
  }
  static handleToPad (num, n = 2) {
    if ((num + '').length >= n) return num
    return this.handleToPad('0' + num, n)
  }
  static handleOuterStatus (status) {
    switch (status) {
      case 1:
        return {
          status,
          text: '未支付',
          button: '继续支付'
        }
      case 2:
        return {
          status,
          text: '待发货',
          button: null
        }
      case 3:
        return {
          status,
          text: '待收货',
          button: null
        }
      case 4:
        return {
          status,
          text: '已完成',
          button: null
        }
      case 5:
        return {
          status,
          text: '申请退款',
          button: null
        }
      case 6:
        return {
          status,
          text: '通过审核等待填单',
          button: null
        }
      case 7:
        return {
          status,
          text: '驳回',
          button: null
        }
      case 8:
        return {
          status,
          text: '等待商家收货',
          button: null
        }
      case 9:
        return {
          status,
          text: '退货成功',
          button: null
        }
      case 10:
        return {
          status,
          text: '交易关闭',
          button: null
        }
    }
  }
  static handleInnerStatus (status) {
    switch (status) {
      case 0:
        return {
          status,
          text: '未支付',
          button: '继续支付'
        }
      case 1:
        return {
          status,
          text: '可以申请退款',
          button: '申请退款'
        }
      case 2:
        return {
          status,
          text: '审核中',
          button: null
        }
      case 3:
        return {
          status,
          text: '退款申请成功',
          button: null
        }
      case 4:
        return {
          status,
          text: '驳回',
          button: null
        }
      case 5:
        return {
          status,
          text: '商家待收货',
          button: null
        }
      case 6:
        return {
          status,
          text: '完成退款',
          button: null
        }
    }
  }
}

export default Common
