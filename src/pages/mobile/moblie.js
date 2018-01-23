import Vue from 'vue'
import 'normalize.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'animate.css'
import Mobile from 'components/Mobile.vue'

window.vm = new Vue({
  el: '#app',
  render: h => h(Mobile)
})
