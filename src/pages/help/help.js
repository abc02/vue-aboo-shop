import Vue from 'vue'
import Base from 'mixins/Base'
import ProductHelp from 'components/ProductHelp'

window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  components: {
    'product-help': ProductHelp
  }
})
