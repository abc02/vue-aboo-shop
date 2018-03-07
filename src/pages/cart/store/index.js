import Vue from 'vue'
import Vuex from 'vuex'
import Common from 'modules/service/CommonServices.js'
import Cart from 'modules/service/CartServices.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    isLoading: false,
    userInfo: null,
    cartLists: null,
    isEdit: false,
    editText: '编辑'
  },
  getters: {
    cartSummary: state => {
      let { cartLists } = state
      let price = 0
      let number = 0
      if (cartLists && cartLists.length) {
        cartLists.map(cart => {
          price += (Number.parseFloat(cart.price) * Number.parseInt(cart.number))
          number += Number.parseInt(cart.number)
        })
        return {
          totalPrice: `￥${Number.parseFloat(price).toFixed(2)}`,
          totalNumbar: number
        }
      }
      return null
    }
  },
  mutations: {
    handleLoading (state) {
      state.loading = !state.loading
      state.isLoading = !state.isLoading
    },
    handleEdit (state) {
      state.isEdit = !state.isEdit
      if (state.isEdit) {
        state.editText = '完成'
      } else {
        state.editText = '编辑'
      }
    },
    generateUserInfo (state) {
      let userInfo = Common.generateSessionStorageUserInfo()
      state.userInfo = userInfo
    },
    generateUserInfoCheck (state) {
      let userInfo = Common.generateSessionStorageUserInfo()
      if (!userInfo) {
        Common.handleRedirectPage('login')
      }
      state.userInfo = userInfo
    },
    generateGetCartListsMutations (state, cartLists) {
      state.cartLists = cartLists
    }
  },
  actions: {
    generateCartListsAction ({ commit, state }) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Cart.GetShopCart({userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateGetCartListsMutations', res.data)
        }
        if (res.ret === 1002) {
          commit('generateGetCartListsMutations', null)
        }
      })
    },
    handleCartDeleteAction ({ commit, dispatch, state }, key) {
      if (!window.confirm('您确定要删除吗')) return
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Cart.DelShopCart({userId, key}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          dispatch('generateCartListsAction')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
})

export default store
