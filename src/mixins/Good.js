// 商品车组件
// 服务层组件
import ShopServices from 'modules/service/ShopServices.js'
import qs from 'qs'
let { goodsId } = qs.parse(location.search.substr(1))
export default {
  data: {
    goodsInfo: null,
    priceList: null,
    specDatas: null,
    selectSpecDatas: {},
    currentGoods: null,
    number: 1
  },
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
    },
    total () {
      if (this.currentGoods) {
        let total = this.currentGoods.Price * this.number
        return `￥${total}`
      }
      return null
    }
  },
  watch: {
    selectSpecData () {
      if (this.priceList && this.priceList.length && this.selectSpecData && this.selectSpecData.length === 3) {
        let spceArray = []
        let spceId = this.selectSpecData.join(',')
        this.priceList.forEach(Good => {
          if (Good.SpecId === spceId) {
            this.currentGoods = Good
          }
        })
        for (let key in this.selectSpecDatas) {
          this.specDatas.forEach(specData => {
            let specName = ''
            if (specData.specId === Number.parseInt(key)) {
              specName += `${specData.specName}:`
              specData.specSub.forEach(specSub => {
                if (specSub.Cid === Number.parseInt(this.selectSpecDatas[key])) {
                  specName += `${specSub.Name}`
                  spceArray.push(specName)
                }
              })
            }
          })
        }
        this.currentGoods.specName = spceArray.join('|')
      }
      return null
    }
  },
  methods: {
    handleChangeNumber (newNunber) {
      if (!this.currentGoods) return this.$message.error('请选择规格')
      this.currentGoods.number = newNunber
    }
  },
  created () {
    this.handleLoading()
    ShopServices.GetGoodsSpec({ goodsId }).then(res => {
      this.handleLoading()
      if (res.ret === 1001) {
        this.goodsInfo = res.goodsinfo
        this.priceList = res.priceList
        this.specDatas = res.specDatas
      }
    })
  }
}
