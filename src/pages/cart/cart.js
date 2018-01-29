import Vue from 'vue'
import Base from 'mixins/Base'
import Cart from 'mixins/Cart'

window.vm = new Vue({
  el: '#app',
  mixins: [Base, Cart],
  data: {
    tableData: [{
      name: '商品昵称',
      price: 3299,
      number: 2,
      subtotal: 3299,
      delete: true
    }]
  },
  computed: {
    total () {
      if (this.tableData && this.tableData.length) {
        let total = 0
        this.tableData.forEach(shop => {
          total += shop.price * shop.number
        })
        return total
      }
    }
  },
  methods: {
    redirectToBuy () {
      location.href = `buy.html?gid=${1}`
    }
  },
  created () {
    console.log('async')
  }
})
