import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar from 'components/NavigationBar'
import Foot from 'components/Foot'

Vue.use(ElementUI)
window.vm = new Vue({
  el: '#app',
  components: {
    'navigation-bar': NavigationBar,
    'foot': Foot
  },
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
  async created () {
    console.log('async')
  }
})
