// 服务层组件
import ShopServices from 'modules/service/ShopServices.js'
export default {
  data: {
    cartLists: null,
    cartKey: '',
    cartStatus: 1 // 1 正常 2 弹窗
  },
  computed: {
    total () {
      if (this.cartLists && this.cartLists.length) {
        let total = 0
        console.log(this.cartLists)
        this.cartLists.forEach(cartItem => {
          total += (Number.parseFloat(cartItem.price) * Number.parseInt(cartItem.number))
        })
        return `￥${Number.parseFloat(total).toFixed(2)}`
      }
      return null
    }
  },
  methods: {
    handleClickCartStatus (status, cartKey) {
      if (cartKey) {
        this.cartKey = cartKey
      }
      this.cartStatus = status
    },
    handleClickCartAdd (formData) {
      this.generateCheckUserInfo()
      let userId = this.userInfo.UserId
      let { GoodsId, SpecId, specName, number } = formData
      this.handleLoading()
      ShopServices.AddShopCart({userId, goodsId: GoodsId, specId: SpecId, specName, number}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.handleClickCartStatus(2)
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
        }
      })
    },
    handleClickCartDelete (key) {
      this.generateCheckUserInfo()
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopServices.DelShopCart({userId, key}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.$message.error(res.code)
          this.handleClickCartStatus(1)
          this.generateGetCartLists()
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
          this.generateGetCartLists()
        }
      })
    },
    generateGetCartLists () {
      this.generateCheckUserInfo()
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopServices.GetShopCart({userId}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.cartLists = res.data
        }
        if (res.ret === 1002) {
          this.cartLists = null
        }
      })
    }
  }
}
