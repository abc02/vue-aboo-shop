import Vue from 'vue'
// 混合 基础 收货地址 购物车
import Base from 'mixins/Base'

window.vm = new Vue({
  el: '#app',
  mixins: [Base]
})
