import Order from 'modules/service/OrderServices.js'
import CommonBase from 'mixins/CommonBase'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Summary',
  mixins: [CommonBase],
  data () {
    return {
      isSubmit: false
    }
  },
  created () {
    if (!this.filterDefaultAddress) {
      this.generateAddressListsAction()
    }
    if (!this.cartLists) {
      this.generateCartListsAction()
    }
  },
  computed: {
    ...mapState(['isLoading', 'loading', 'cartLists']),
    ...mapGetters(['filterDefaultAddress', 'cartListsTotal'])
  },
  methods: {
    ...mapMutations(['handleLoading']),
    ...mapActions(['generateAddressListsAction', 'generateCartListsAction']),
    handleOrderAddAction (goods) {
      if (this.isSubmit) {
        window.confirm('您已经成功提交订单，请不要重复提交。')
      }
      let { userId, addressId } = this.filterDefaultAddress
      this.handleLoading()
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
      let instance = {
        userId,
        addressId,
        goodsId: goodsId.join('##'),
        specId: specId.join('##'),
        specName: specName.join('##'),
        number: number.join('##'),
        desc: desc.join('##')
      }
      Order.AddOrder(instance).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.isSubmit = true
          this.$router.push({
            name: 'pay', params: { sign: res.sign, instance: res }
          })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
}
