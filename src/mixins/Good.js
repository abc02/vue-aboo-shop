// 服务层组件
import ShopServices from 'modules/service/ShopServices.js'

export default {
  data: {
    goodsInfo: null,
    priceList: null,
    specDatas: null,
    selectSpecDatas: null,
    number: 1
  },
  computed: {
    specIdArray () {
      if (this.specDatas && this.specDatas.length && this.selectSpecDatas) {
        let arr = []
        let keys = Object.keys(this.selectSpecDatas)
        keys.forEach(key => {
          arr.push(this.selectSpecDatas[key])
        })
        return arr
      }
      return []
    },
    currentGoods () {
      if (this.priceList && this.priceList.length && this.specIdArray && this.specIdArray.length) {
        let currentGoods = null
        let spceArray = []
        let spceId = this.specIdArray.join(',')
        this.priceList.forEach(Good => {
          if (Good.SpecId === spceId) {
            currentGoods = Good
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
        currentGoods.specName = spceArray.join('|')
        currentGoods.number = this.number
        return currentGoods
      }
      return null
    }
  },
  methods: {
    handleChangeGoodsNumber (newValue) {
      this.number = newValue
    },
    generateGetGoodsSpec (formData) {
      this.handleLoading()
      ShopServices.GetGoodsSpec(formData).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          let {goodsinfo, priceList, specDatas} = res
          this.goodsInfo = goodsinfo
          this.priceList = priceList
          this.specDatas = specDatas
          let selectSpecDatas = {}
          specDatas.forEach(specData => {
            selectSpecDatas[specData.specId] = specData.specSub[0].Cid
          })
          // selectSpecDatas[this.specDatas[0].specId] = this.specDatas[0].specSub[0].Cid
          this.selectSpecDatas = selectSpecDatas
        }
        if (res.ret === 1002) {
          this.$message.info(res.code)
          this.handleClickRedirectPage('product', {goodsId: 7})
        }
      })
    }
  }
}
