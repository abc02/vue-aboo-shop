import Vue from 'vue'
import Base from 'mixins/Base'
import ShopServices from 'modules/service/ShopServices'
import qs from 'qs'
let { goodsId } = qs.parse(location.search.substr(1))

window.vm = new Vue({
  el: '#app',
  data: {
    goodsInfo: null,
    priceList: null,
    specDatas: null,
    selectSpecDatas: {},
    currentGoods: null
  },
  mixins: [Base],
  computed: {
    selectSpecData () {
      if (this.specDatas && this.specDatas.length) {
        let SpecId = []
        let keys = Object.keys(this.selectSpecDatas)
        keys.forEach(key => {
          SpecId.push(this.selectSpecDatas[key])
        })
        return SpecId
      }
      return null
    }
  },
  watch: {
    selectSpecData () {
      if (this.priceList && this.priceList.length && this.selectSpecData && this.selectSpecData.length === 3) {
        let SpceId = this.selectSpecData.join(',')
        this.priceList.forEach(Good => {
          if (Good.SpecId === SpceId) {
            this.currentGoods = Good
          }
        })
      }
      return null
    }
  },
  methods: {
    redirectToCart () {
      location.href = `cart.html?goodsId=${this.specItem.GoodsId}`
    }
  },
  async created () {
    ShopServices.GetGoodsSpec({ goodsId }).then(res => {
      console.log(res)
      this.goodsInfo = res.goodsinfo
      this.priceList = res.priceList
      this.specDatas = res.specDatas
    })
  }
})
