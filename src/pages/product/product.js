import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'
import './product.scss'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar from 'components/NavigationBar'
import Product from 'components/Product'
import Foot from 'components/Foot'
// import axios from 'axios'
// import qs from 'qs'
// import API from 'utils/api'
import test from './test.json'
// let { goodsId } = qs.parse(location.search.substr(1))

let res = {
  data: test
}

Vue.use(ElementUI)
window.vm = new Vue({
  el: '#app',
  data: {
    goodsInfo: null,
    priceList: null,
    specDatas: null,
    selectSpecData: {}
  },
  computed: {
    specItem () {
      // if (this.selectSpecData && this.priceList) {
      //   let keys = Object.keys(this.selectSpecData)
      //   let arr = []
      //   for (let i = 0; i < keys.length; i++) {
      //     arr.push(this.selectSpecData[keys[i]])
      //   }
      //   let SpecId = arr.join(',')
      //   this.priceList.map(item => {
      //     if (item.SpecId === SpecId) {
      //       console.log(item)
      //       return item
      //     }
      //   })
      // }
      let item = {
        GoodsId: 1,
        Id: 1,
        Price: 5,
        SpecId: '2,8,12'
      }
      return item
    }
  },
  components: {
    'navigation-bar': NavigationBar,
    'product': Product,
    'foot': Foot
  },
  methods: {
    redirectToCart () {
      location.href = `cart.html?goodsid=${this.specItem.GoodsId}`
    }
  },
  async created () {
    // let res = await axios.post(API.GetGoodsSpec, { goodsId })
    this.goodsInfo = res.data.goodsinfo
    this.priceList = res.data.priceList
    this.specDatas = res.data.specDatas
    this.specDatas.map(specData => {
      this.selectSpecData[specData.specId] = specData.specSub[0].Cid
    })
  }
})
