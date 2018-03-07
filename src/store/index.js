import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'
import login from './modules/login.js'
import cart from './modules/cart.js'
import products from './modules/products.js'
import address from './modules/address.js'
import orders from './modules/orders.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    cart,
    products,
    address,
    orders,
    login
  }
})

export default store
