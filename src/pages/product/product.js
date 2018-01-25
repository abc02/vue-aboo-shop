import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'
import './product.scss'

import Vue from 'vue'
import ElementUI from 'element-ui'
import Base from 'mixins/Base'
import ShopServices from 'modules/service/ShopServices'
import qs from 'qs'
let { goodsId } = qs.parse(location.search.substr(1))

Vue.use(ElementUI)
window.vm = new Vue({
  el: '#app',
  data: {
    goodsInfo: null,
    priceList: null,
    specDatas: null,
    selectSpecData: {}
  },
  mixins: [Base],
  computed: {
    selectPriceId () {
      if (this.selectSpecId.length >= 3) {
        let SpecId = this.selectSpecId.join(',')
        this.priceList.forEach(item => {
          if (item.SpecId === SpecId) {
            console.log(item.SpecId)
            return item
          }
        })
      }
      return null
    },
    selectSpecId () {
      let keys = Object.keys(this.selectSpecData)
      let arr = []
      for (let i = 0; i < keys.length; i++) {
        arr.push(this.selectSpecData[keys[i]])
      }
      return arr
    }
  },
  methods: {
    redirectToCart () {
      location.href = `cart.html?goodsId=${this.specItem.GoodsId}`
    }
  },
  created () {
    ShopServices.GetGoodsSpec({ goodsId }).then(res => {
      console.log(res)
      this.goodsInfo = res.data.goodsinfo
      this.priceList = res.data.priceList
      this.specDatas = res.data.specDatas
    })
  }
})
