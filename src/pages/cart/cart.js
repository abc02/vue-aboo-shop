import Vue from 'vue'
// 混合通用依赖
import Base from 'mixins/Base'
import store from 'store/index.js'
// import store from './store/index.js'
import router from './router/index.js'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  store,
  router
})
