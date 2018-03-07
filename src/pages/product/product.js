import Vue from 'vue'
// 混合通依赖
import Base from 'mixins/Base'
// import Good from 'mixins/Good'
// import Cart from 'mixins/Cart'
// import Product from './components/Product'
// import CartButtonFixed from 'components/CartButtonFixed'
// import CartAddDialog from 'components/CartAddDialog'

import store from './store/index.js'
import router from './router/index.js'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  store,
  router
})
