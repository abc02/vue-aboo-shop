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
    generateCartListsMutations (state, cartLists) {
      state.cartLists = cartLists
    }
  },
  actions: {
    generateCartListsAction ({ commit, rootState }) {
      commit('generateUserInfoCheck', null, { root: true })
      let userId = rootState.userInfo.UserId
      commit('handleLoading', null, { root: true })
      Cart.GetShopCart({userId}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('generateCartListsMutations', res.data)
        }
        if (res.ret === 1002) {
          commit('generateCartListsMutations', null)
        }
      })
    },
    handleCartDeleteAction ({ commit, dispatch, state, rootState }, key) {
      if (!window.confirm('您确定要删除吗')) return
      commit('generateUserInfoCheck', null, { root: true })
      let userId = rootState.userInfo.UserId
      commit('handleLoading', null, { root: true })
      Cart.DelShopCart({userId, key}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          dispatch('generateCartListsAction')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleCartAddAction ({ commit, rootState }, instance) {
      commit('generateUserInfoCheck', null, { root: true })
      commit('handleLoading', null, { root: true })
      let userId = rootState.userInfo.UserId
      let { goodsId, specId, specName, number } = instance
      Cart.AddShopCart({userId, goodsId, specId, specName, number}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('handeDialogOpen')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
}

export default cart
