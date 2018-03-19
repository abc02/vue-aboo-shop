// import Common from 'modules/service/CommonServices.js'
import Cart from 'modules/service/CartServices.js'

const cart = {
  namespaced: true,
  state: {
    isDialog: false,
    cartLists: null,
    isEdit: false,
    editText: '编辑'
  },
  getters: {
    cartListsTotal: state => {
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
    handleEdit (state) {
      state.isEdit = !state.isEdit
      if (state.isEdit) {
        state.editText = '完成'
      } else {
        state.editText = '编辑'
      }
    },
    handeDialogOpen (state) {
      state.isDialog = true
    },
    handeDialogClose (state) {
      state.isDialog = false
    },
    generateCartListsMutations (state, instance) {
      console.log(instance)
      if (instance.ret === 1001) state.cartLists = instance.data
      if (instance.ret === 1002) state.cartLists = null
    }
  },
  actions: {
    async generateCartListsAction ({ commit, dispatch, rootState }) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      // 请求
      commit('generateCartListsMutations', await Cart.GetShopCart({userId}, true))
      commit('handleLoading', null, { root: true })
    },
    async handleCartDeleteAction ({ commit, dispatch, state, rootState }, key) {
      if (!window.confirm('您确定要删除吗')) return
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      // 请求
      let res = await Cart.DelShopCart({userId, key}, true)
      commit('handleLoading', null, { root: true })
      if (res.ret === 1001) dispatch('generateCartListsAction')
      if (res.ret === 1002) window.confirm(res.code)
    },
    async handleCartAddAction ({ commit, rootState }, instance) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      let { goodsId, specId, specName, number } = instance
      commit('handleLoading', null, { root: true })
      // 请求
      let res = await Cart.AddShopCart({userId, goodsId, specId, specName, number}, true)
      commit('handleLoading', null, { root: true })
      if (res.ret === 1001) commit('handeDialogOpen')
      if (res.ret === 1002) window.confirm(res.code)
    }
  }
}

export default cart
