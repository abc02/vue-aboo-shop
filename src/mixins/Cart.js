// 购物车组件
import CartButtonFixed from 'components/CartButtonFixed'
import CartDialog from 'components/CartDialog'
// 服务层组件
import ShopServices from 'modules/service/ShopServices.js'
export default {
  data: {
    cartStatus: 1 // 1 正常 2 弹窗
  },
  components: {
    'cart-button-fixed': CartButtonFixed,
    'cart-dialog': CartDialog
  },
  methods: {
    handleClickCartStatus (status) {
      this.cartStatus = status
    },
    handleClickRedirectCart () {
      location.href = 'cart.html'
    },
    handleClickCartAdd (formData) {
      this.handleCkeckUserInfo()
      let userId = this.userInfo.UserId
      let { GoodsId, SpecId, specName, number } = formData
      this.handleLoading()
      ShopServices.AddShopCart({userId, goodsId: GoodsId, specId: SpecId, specName, number}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          console.log(res)
          this.cartStatus = 2
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
        }
      })
    }
  }
}
