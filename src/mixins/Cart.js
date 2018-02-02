// 购物车组件
import CartButtonFixed from 'components/CartButtonFixed'
import CartDialog from 'components/CartDialog'
import CartList from 'components/CartList'
// 服务层组件
import ShopServices from 'modules/service/ShopServices.js'
export default {
  data: {
    cartLists: null,
    cartStatus: 1 // 1 正常 2 弹窗
  },
  components: {
    'cart-button-fixed': CartButtonFixed,
    'cart-dialog': CartDialog,
    'cart-list': CartList
  },
  methods: {
    handleClickCartStatus (status) {
      this.cartStatus = status
    },
    handleClickRedirectCart () {
      location.href = 'cart.html'
    },
    handleClickRedirectBuy () {
      location.href = 'buy.html'
    },
    handleClickCartAdd (formData) {
      this.handleCheckUserInfo()
      let userId = this.userInfo.UserId
      let { GoodsId, SpecId, specName, number } = formData
      this.handleLoading()
      ShopServices.AddShopCart({userId, goodsId: GoodsId, specId: SpecId, specName, number}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.cartStatus = 2
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
        }
      })
    },
    handleClickCartDelete (key) {
      this.$confirm('此操作将删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let userId = this.userInfo.UserId
        this.handleLoading()
        ShopServices.DelShopCart({userId, key}).then(res => {
          this.handleLoading()
          if (res.ret === 1001) {
            this.$message.error(res.code)
            this.handleGetCartLists()
          }
          if (res.ret === 1002) {
            this.$message.error(res.code)
            this.handleGetCartLists()
          }
        })
      })
    },
    handleGetCartLists () {
      this.handleCheckUserInfo()
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
