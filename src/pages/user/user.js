import Vue from 'vue'
// 混合 基础 地址 订单
import Base from 'mixins/Base'
import Address from 'mixins/Address'
import Order from 'mixins/Order'
import VueSessionStorage from 'vue-sessionstorage'

Vue.use(VueSessionStorage)
window.vm = new Vue({
  el: '#app',
  mixins: [Base, Order, Address],
  data: {
    menuStatus: '1', // 1账号 2个人资料 3订单 4收货地址
    menuText: '我的账号'
  },
  methods: {
    handleSelect (status, indexPath, e) {
      this.menuStatus = status
      this.menuText = e.$el.innerText
      this.addressStatus = 1
      this.orderStatus = 1
    }
  },
  created () {
    this.handleCkeckUserInfo()
  }
})
