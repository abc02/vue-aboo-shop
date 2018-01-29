import Vue from 'vue'
// 混合 基础 轮播 产品介绍
import Base from 'mixins/Base'
import Swiper from 'components/Swiper'
import ProductIntroduction from 'components/ProductIntroduction'
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  components: {
    'swiper': Swiper,
    'product-introduction': ProductIntroduction
  },
  data: {
    footStyle: {
      backgroundColor: '#f6655e',
      color: '#ffffff'
    }
  },
  created () {
    let Mobile = /Mobile/i.test(navigator.userAgent)
    if (Mobile) {
      location.href = 'moblie.html'
    }
  }
})
