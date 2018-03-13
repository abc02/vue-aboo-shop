// import Order from 'modules/service/OrderServices.js'
import CommonBase from 'mixins/CommonBase'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Summary',
  mixins: [CommonBase],
  computed: {
    ...mapState({
      isLoading: 'isLoading',
      addressLists: state => state.address.addressLists,
      cartLists: state => state.cart.cartLists
    }),
    ...mapGetters({
      defaultAddress: 'address/defaultAddress',
      cartListsTotal: 'cart/cartListsTotal'
    })
  },
  methods: {
    ...mapActions({
      generateAddressListsAction: 'address/generateAddressListsAction',
      generateCartListsAction: 'cart/generateCartListsAction',
      handleOrdersAddAction: 'orders/handleOrdersAddAction'
    })
  },
  created () {
    if (!this.defaultAddress) {
      this.generateAddressListsAction()
    }
    if (!this.cartLists) {
      this.generateCartListsAction()
    }
  }
}
