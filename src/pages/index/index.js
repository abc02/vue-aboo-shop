import Vue from 'vue'
// 混合通用依赖
import Base from 'mixins/Base'
// 引入全局 store
import store from 'store/index.js'
// 引入局部 router
import router from './router/index.js'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  // 注入store router
  store,
  router
})
