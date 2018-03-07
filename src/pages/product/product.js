import Vue from 'vue'
// 引入混合通依赖
import Base from 'mixins/Base'
// 引入全局状态管理
import store from 'store/index.js'
import router from './router/index.js'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  store,
  router
})
