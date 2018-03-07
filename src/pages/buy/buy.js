import Vue from 'vue'
// 混合通用依赖
import Base from 'mixins/Base'
// 引入全局状态管理
import store from 'store/index.js'
// 引入局部引入
import router from './router/index.js'
// 根组件注入 store vue-router
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  router,
  store
})
