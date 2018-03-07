import Vue from 'vue'
// 混合通用依赖
import Base from 'mixins/Base'
import router from './router/index.js'
import store from './store/index.js'
// 根组件注入 store vue-router
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  router,
  store
})
