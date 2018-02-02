import Vue from 'vue'
// 混合 基础 收货地址 购物车 订单
import Base from 'mixins/Base'
import Cart from 'mixins/Cart'
import Address from 'mixins/Address'
import Order from 'mixins/Order'
import Buy from 'mixins/Buy'
import Pay from 'mixins/Pay'

window.vm = new Vue({
  el: '#app',
  mixins: [Base, Cart, Address, Order, Buy, Pay],
  created () {
    this.handleGetAddressLists()
    this.handleGetCartLists()
  }
})
