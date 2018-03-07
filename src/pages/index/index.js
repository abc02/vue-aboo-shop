import Vue from 'vue'
// 引用通用依赖
import Base from 'mixins/Base'
import router from './router/index.js'
import store from 'store/index.js'
// import store from './store/index.js'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  router,
  store
  // created () {
  //   let Mobile = /Mobile/i.test(navigator.userAgent)
  //   if (Mobile) {
  //     location.href = 'moblie.html'
  //   }
  // }
})
