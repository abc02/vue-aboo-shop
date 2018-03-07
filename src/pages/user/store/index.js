import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router/index.js'
import Common from 'modules/service/CommonServices.js'
import Address from 'modules/service/AddressServices.js'
import Order from 'modules/service/OrderServices.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    loading: false,
    isLoading: false,
    userInfo: null,
    ordersLists: null,
    orderADetail: null,
    orderBList: null,
    addressLists: null
  },
  getters: {
    modifyOrderLists: state => {
      let { ordersLists } = state
      if (ordersLists) {
        let arr = []
        let date
        ordersLists.forEach(order => {
          let { CreateTime, Img, OrderId, Price, Sign, Status } = order
          date = Number.parseInt(CreateTime + '000')
          arr.push({
            createTime: Common.handleCreateTimeText(date),
            img: Img,
            orderId: OrderId,
            price: `￥${Number.parseFloat(Price).toFixed(2)}`,
            sign: Sign,
            status: Common.handleOuterStatus(Status),
            payType: '在线支付'
          })
        })
        return arr
      }
      return []
    },
    modifyOrderADetail: state => {
      let { orderADetail } = state
      if (orderADetail) {
        let { Address, CreateTime, Phone, Price, Status } = orderADetail
        let address = JSON.parse(Address)
        let date = Number.parseInt(CreateTime + '000')
        return {
          address: `${address.Province} ${address.City} ${address.Area} ${address.Detail} ${address.NickName} ${address.Phone}`,
          createTime: Common.handleCreateTimeText(date),
          payType: '在线支付',
          phone: Phone,
          price: `￥${Number.parseFloat(Price).toFixed(2)}`,
          status: Common.handleOuterStatus(Status)
        }
      }
      return null
    },
    modifyOrderBLists: state => {
      let { orderBList } = state
      if (orderBList && orderBList.length) {
        let arr = []
        orderBList.slice(0).forEach(orderItem => {
          let { Desc, GoodsId, GoodsName, Img, Price, Status } = orderItem
          arr.push({
            desc: Desc,
            goodsId: GoodsId,
            goodsName: GoodsName,
            img: Img,
            number: orderItem.Number,
            price: `￥${Number.parseFloat(Price).toFixed(2)}`,
            subTotal: `￥${Number.parseFloat(orderItem.Number * Price).toFixed(2)}`,
            status: Common.handleInnerStatus(Status)
          })
        })
        return arr
      }
      return []
    },
    modifyAddressLists: state => {
      let { addressLists } = state
      if (addressLists && addressLists.length > 0) {
        let arr = []
        addressLists.slice(0).forEach(address => {
          let { Area, City, Detail, Id, UserId, IsDefault, NickName, Phone, Province } = address
          // Number to Boolean
          // IsDefault === 1 ? IsDefault = true : IsDefault = false
          arr.push({
            area: Area,
            city: City,
            detail: Detail,
            addressId: Id,
            userId: UserId,
            isDefault: IsDefault,
            nickName: NickName,
            phone: Phone,
            province: Province,
            provinceCityArea: [address.Province, address.City, address.Area],
            addressLonger: `${address.Province}${address.City}${address.Area}${address.Detail}`
          })
        })
        return arr
      }
      return []
    }
  },
  mutations: {
    handleTitle (state, title) {
      state.title = title
    },
    handleLoading (state) {
      state.isLoading = !state.isLoading
      state.loading = !state.loading
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
    generateOrdersListsMutation (state, ordersLists) {
      state.ordersLists = ordersLists
    },
    generateOrdersDetailMutation (state, detail) {
      state.orderADetail = detail.orderADetail
      state.orderBList = detail.orderBList
    },
    generateAddressListsMutation (state, addressLists) {
      state.addressLists = addressLists
    }
  },
  actions: {
    generateOrdersListsAction ({commit, state}, limit) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Order.GetOrderList({userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateOrdersListsMutation', res.data)
        }
        if (res.ret === 1002) {
          commit('generateOrdersListsMutation', null)
        }
      })
    },
    generateGetOrderDetailAction ({ commit, state }, orderId) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Order.GetOrderDetail({userId, orderId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateOrdersDetailMutation', res)
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
          commit('generateAddressListsMutation', null)
        }
      })
    },
    handleAddressDeleteAction ({ commit, state, dispatch }, addressId) {
      if (!window.confirm('此操作将删除该收货地址, 是否继续?')) return
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Address.DeleteAddress({userId, addressId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          window.confirm(res.code)
          dispatch('generateAddressListsAction')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressAddAction ({ commit, state }, instance) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Address.AddAddress({...instance, userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          window.confirm(res.code)
          Router.push({ name: 'addresslists' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressUpdateAction ({ commit, state }, instance) {
      commit('generateUserInfoCheck')
      let userId = state.userInfo.UserId
      commit('handleLoading')
      Address.UpdateAddress({...instance, userId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          window.confirm(res.code)
          Router.push({ name: 'addresslists' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
})

export default store
