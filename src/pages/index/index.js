// 引入样式统一性
import 'normalize.css'
// 引入字体样式
import '../../../node_modules/fonts.css/fonts.css'
// 引入动画库
import 'animate.css'
// 引入重置样式
import 'styles/reset.scss'
// 引入公共样式
import 'styles/common.scss'

import Vue from 'vue'
// 引入全局 store
import store from 'store/index.js'
// 引入局部 router
import router from 'router/index.js'
// 引入 element ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// 引入 muse-ui ui组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(ElementUI)
// 注册过滤器
Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('timestamp', date => {
  if (!date) return ''
  if (String(date).length < 12) {
    date = Number.parseInt(date + '000')
  }
  let handleToYYYYMMDD = date => {
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
  let handleToHHMMSSMS = date => {
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
  let handleToPad = (num, n = 2) => {
    if ((num + '').length >= n) return num
    return handleToPad('0' + num, n)
  }
  let YYYYMMDD = handleToYYYYMMDD(new Date(date))
  let HHMMSSMS = handleToHHMMSSMS(new Date(date))
  return `${YYYYMMDD.YYYY}-${handleToPad(YYYYMMDD.MM)}-${handleToPad(YYYYMMDD.DD)} ${handleToPad(HHMMSSMS.HH)}:${handleToPad(HHMMSSMS.MM)}:${handleToPad(HHMMSSMS.SS)}`
})
Vue.filter('RMB', value => {
  if (!value) return ''
  return `￥${Number.parseFloat(value).toFixed(2)}`
})
Vue.filter('orderOuterStatus', status => {
  if (!status) return ''
  switch (status) {
    case 1:
      return '未支付'
    case 2:
      return '待发货'
    case 3:
      return '待收货'
    case 4:
      return '已完成'
    case 5:
      return '申请退款'
    case 6:
      return '通过审核等待填单'
    case 7:
      return '驳回'
    case 8:
      return '等待商家收货'
    case 9:
      return '退货成功'
    case 10:
      return '交易关闭'
  }
})
Vue.filter('orderInnerStatus', status => {
  if (!status) return ''
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
})
window.vm = new Vue({
  el: '#app',
  data: {
    isMobile: /Mobile/i.test(navigator.userAgent)
  },
  // 注入store router
  store,
  router
})
