// 订单组件
import OrderList from 'components/OrderList'
import OrderDetail from 'components/OrderDetail'
// 服务层组件
import ShopServices from 'modules/service/ShopServices.js'
export default {
  data: {
    orderLists: null,
    orderADetail: null,
    orderBList: null,
    orderId: '',
    orderStatus: 1, // 1 订单列表 2 订单详情
    limit: 0,
    firstGet: true
  },
  computed: {
    total () {
      if (this.orderLists && this.orderLists.length) {
        return this.orderLists.length
      }
      return 0
    }
  },
  components: {
    'order-list': OrderList,
    'order-detail': OrderDetail
  },
  methods: {
    handleClickOrderStatus (status, orderId) {
      if (status === '2') { this.orderId = orderId }
      this.orderStatus = status
    },
    handleGetOrderLists (limit) {
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopServices.GetOrderList({userId, limit}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.orderLists = res.data
          this.limit = res.limit
        }
        if (res.ret === 1002) {
          this.$message(res.code)
        }
      })
    },
    handleGetOrderDetail (orderId) {
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopServices.GetOrderDetail({userId, orderId}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.orderADetail = res.orderADetail
          this.orderBList = res.orderBList
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
        }
      })
    },
    handleClickOrderAdd (goods, mailAddress) {
      let goodsId = []
      let specId = []
      let specName = []
      let number = []
      let desc = []
      goods.forEach(good => {
        goodsId.push(good.goodsId)
        specId.push(good.specId)
        specName.push(good.specName)
        number.push(good.number)
        desc.push('')
      })
      let formData = {
        userId: mailAddress.UserId,
        addressId: mailAddress.Id,
        goodsId: goodsId.join('##'),
        specId: specId.join('##'),
        specName: specName.join('##'),
        number: number.join('##'),
        desc: desc.join('##')
      }
      this.handleLoading()
      ShopServices.AddOrder(formData).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.handleAsyncPay.call(null, res)
        }
        if (res.ret === 1002) {
          this.$message(res.code)
        }
      })
    }
  }
}
