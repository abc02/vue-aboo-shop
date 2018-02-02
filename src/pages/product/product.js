import Vue from 'vue'
// 混合 基础 商品 购物车
import Base from 'mixins/Base'
import Good from 'mixins/Good'
import Cart from 'mixins/Cart'
import qs from 'qs'
let { goodsId } = qs.parse(location.search.substr(1))

let cartButtonFixedStyle = {
  position: 'fixed',
  bottom: '0',
  right: '0',
  left: '0',
  borderTop: '1px solid #eee;',
  backgroundColor: '#f7f8f9'
}
window.vm = new Vue({
  el: '#app',
  data: {
    cartButtonFixedStyle
  },
  mixins: [Base, Good, Cart],
  created () {
    this.handleGetGoodsSpec({goodsId})
  }
})
