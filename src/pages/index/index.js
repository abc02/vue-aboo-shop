// 引入样式统一性
import 'normalize.css'
// 引入字体样式
import '../../../node_modules/fonts.css/fonts.css'
// 引入动画库
import 'animate.css'
// 引入重置样式
import 'styles/reset.scss'
// 引入公共样式
import 'styles/common.scss'

import Vue from 'vue'
// 引入全局 store
import store from 'store/index.js'
// 引入局部 router
import router from 'router/index.js'
// 引入 element ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// 引入 muse-ui ui组件
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
Vue.use(ElementUI)
window.vm = new Vue({
  el: '#app',
  data: {
    isMobile: /Mobile/i.test(navigator.userAgent)
  },
  // 注入store router
  store,
  router
})
