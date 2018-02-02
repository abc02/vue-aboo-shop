import Vue from 'vue'
import Base from 'mixins/Base'
import Cart from 'mixins/Cart'

window.vm = new Vue({
  el: '#app',
  mixins: [Base, Cart],
  created () {
    this.handleGetCartLists()
  }
})
