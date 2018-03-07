import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router/index.js'
import Common from 'modules/service/CommonServices.js'
import Address from 'modules/service/AddressServices.js'
import Cart from 'modules/service/CartServices.js'
import Order from 'modules/service/OrderServices.js'
// import qs from 'qs'
// 使用插件
Vue.use(Vuex)
// 创建store实例
const store = new Vuex.Store({
  state: {
    loading: false,
    isLoading: false,
    userInfo: null,
    addressLists: null,
    cartLists: null,
    orderADetail: null,
    orderBList: null
  },
  getters: {
    filterDefaultAddress: state => {
      if (state.addressLists && state.addressLists.length) {
        return (state.addressLists.filter(address => address.isDefault))[0]
      }
      return null
    },
    cartListsTotal: state => {
      let total = 0
      if (state.cartLists && state.cartLists.length) {
        state.cartLists.map(cart => {
          total += (Number.parseFloat(cart.price) * Number.parseInt(cart.number))
        })
        return `￥${Number.parseFloat(total).toFixed(2)}`
      }
      return null
    },
    ModifyOrderADetail: state => {
      if (state.orderADetail) {
        let {Address, CreateTime, Price} = state.orderADetail
        return {
          address: JSON.parse(Address),
          createTime: Common.handleCreateTimeText(CreateTime),
          price: `￥${Number.parseFloat(Price).toFixed(2)}`
        }
      }
      return null
    },
    ModifyOrderBList: state => {
      if (state.orderBList) {
        let arr = []
        state.orderBList.map(orderList => {
          let {GoodsName, SpecName, Number} = orderList
          arr.push({
            goodsName: GoodsName,
            specName: ` (${SpecName})`,
            number: ` x${Number}`
          })
        })
        return arr
      }
      return null
    }
  },
  mutations: {
    handleLoading (state) {
      state.loading = !state.loading
      state.isLoading = !state.isLoading
    },
    handleUserInfoOut (state) {
      state.userInfo = null
      Common.generateSessionStorageUserInfoOut()
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
    generateCartListsMutation (state, cartLists) {
      state.cartLists = cartLists
    },
    generateAddressListsMutation (state, addressLists) {
      let arr = []
      addressLists.forEach(address => {
        let { Area, City, Detail, Id, IsDefault, NickName, Phone, Province, UserId } = address
        arr.push({
          area: Area,
          city: City,
          detail: Detail,
          addressId: Id,
          isDefault: IsDefault,
          nickName: NickName,
          phone: Phone,
          province: Province,
          userId: UserId
        })
      })
      state.addressLists = arr
    },
    generateOrderDetailMutation (state, instance) {
      state.orderADetail = instance.orderADetail
      state.orderBList = instance.orderBList
    },
    handleAddressAddMutation (state, instance) {
      state.addressLists.push(instance)
    },
    handleAddressUpdateMutation (state, instance) {
      let addressLists = [].concat(state.addressLists)
      let index = addressLists.findIndex(address => {
        return address.addressId === instance.addressId
      })
      addressLists[index] = instance
      state.addressLists = addressLists
    },
    hanleAddressDeleteMuataion (state, addressId) {
      let addressLists = state.addressLists
      let index = addressLists.findIndex(address => {
        return address.addressId === addressId
      })
      addressLists.splice(index, 1)
    },
    handleSetDefaultMutation (state, addressId) {
      let addressLists = state.addressLists
      addressLists.forEach(address => {
        address.isDefault = address.addressId === addressId ? 1 : 0
      })
    }
  },
  actions: {
    generateOrderDetailAction ({ commit, state }, orderId) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Order.GetOrderDetail({userId, orderId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateOrderDetailMutation', res)
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    generateCartListsAction ({ commit, state }) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Cart.GetShopCart({userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateCartListsMutation', res.data)
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    generateAddressListsAction ({commit, state}) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Address.GetAddressList({userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateAddressListsMutation', res.data)
        }
        if (res.ret === 1002) {
          Router.push({ name: 'form', params: { type: 'add', isFirst: true } })
        }
      })
    },
    handleAddressAddAction ({ commit, dispatch, state }, instance) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      let { nickName, phone, province, city, area, detail, isFirst } = instance
      Address.AddAddress({nickName, phone, province, city, area, detail, userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          // commit('handleAddressAddMutation', instance)
          console.log(isFirst)
          if (isFirst) {
            Router.push({ name: 'summary' })
          } else {
            Router.push({ name: 'all' })
          }
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressUpdateAction ({ commit, dispatch, state }, instance) {
      commit('generateUserInfoCheck')
      commit('handleLoading')
      Address.UpdateAddress({...instance}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('handleAddressUpdateMutation', instance)
          Router.push({ name: 'all' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressDeleteAction ({ commit, state, dispatch }, addressId) {
      if (!window.confirm('此操作将删除该收货地址, 是否继续?')) return
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Address.DeleteAddress({addressId, userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          dispatch('generateAddressListsAction')
          Router.push({ name: 'all' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressSetDefaultAction ({ commit, dispatch, state }, addressId) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Address.UpdateAddressDefault({userId, addressId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          dispatch('generateAddressListsAction')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
})

export default store
