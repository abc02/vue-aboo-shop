import Vue from 'vue'
// 引入通用依赖
import Base from 'mixins/Base'

import store from './store/index.js'
import router from './router/index.js'
// import Address from 'mixins/Address'
// import Order from 'mixins/Order'
// import Pay from 'mixins/Pay'
// import AddressLists from 'components/AddressLists'
// import AddressAdd from 'components/AddressAdd'
// import AddressUpdate from 'components/AddressUpdate'
// import OrderLists from 'components/OrderLists'
// import OrderDetail from 'components/OrderDetail'
// import OrderListsMobile from 'components/OrderListsMobile'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  store,
  router
  // data: {
  //   menuStatus: '1', // 1账号 2个人资料 3订单 4收货地址
  //   menuText: '我的账号'
  // },
  // components: {
  //   'address-lists': AddressLists,
  //   'address-add': AddressAdd,
  //   'address-update': AddressUpdate,
  //   'order-lists': OrderLists,
  //   'order-detail': OrderDetail,
  //   'order-lists-mobile': OrderListsMobile
  // },
  // methods: {
  //   handleSelect (status, indexPath, e) {
  //     this.menuStatus = status
  //     this.menuText = e.$el.innerText
  //     this.addressStatus = 1
  //     this.orderStatus = 1
  //   }
  // },
  // created () {
  //   this.generateCheckUserInfo()
  // }
})
