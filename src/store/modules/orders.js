// import Common from 'modules/service/CommonServices.js'
import Order from 'modules/service/OrderServices.js'
import router from 'router/index.js'
const orders = {
  namespaced: true,
  state: {
    ordersLists: null,
    orderADetail: null,
    orderBList: null,
    isSubmit: false,
    limit: 0
  },
  mutations: {
    handleSubmit (state, status) {
      state.isSubmit = status
    },
    handleInfiniteScroll (state, status) {
      state.isInfiniteScroll = status
    },
    handleOrdersListsClearMutation (state) {
      state.ordersLists = null
      state.limit = 0
    },
    handleOrdersDetailClearMutation (state) {
      state.orderADetail = null
      state.orderBList = null
    },
    generateOrdersListsMutation (state, instance) {
      let modifyOrderLists = instance => {
        let arr = []
        instance.forEach(order => {
          let { CreateTime, Img, OrderId, Price, Sign, Status, PayType } = order
          arr.push({
            createTime: CreateTime,
            img: Img,
            orderId: OrderId,
            price: Price,
            sign: Sign,
            status: Status,
            payType: PayType
          })
        })
        return arr
      }
      if (state.ordersLists) {
        if (instance.ret === 1001) {
          state.ordersLists.push(...modifyOrderLists(instance.data))
          state.limit = instance.limit
        }
        if (instance.ret === 1002) {
          window.confirm(instance.code)
        }
      } else { // 初始化数据
        if (instance.ret === 1001) {
          state.ordersLists = modifyOrderLists(instance.data)
          state.limit = instance.limit
        }
        if (instance.ret === 1002) {
          state.ordersLists = null
          state.limit = 0
        }
      }
    },
    generateOrdersDetailMutation (state, instance) {
      let { orderADetail, orderBList } = instance
      // orderADetail
      let modifyOrderADetail = instance => {
        let { Address, CreateTime, Phone, Price, Status, PayType } = instance
        let address = JSON.parse(Address)
        return {
          address,
          addressLonger: `${address.Province} ${address.City} ${address.Area} ${address.Detail} ${address.NickName} ${address.Phone}`,
          createTime: CreateTime,
          payType: PayType,
          phone: Phone,
          price: Price,
          status: Status
        }
      }
      let mofifyOrderBList = instance => {
        // orderBList
        let arr = []
        instance.slice(0).forEach(orderItem => {
          let { Desc, GoodsId, GoodsName, Img, Price, Status } = orderItem
          arr.push({
            desc: Desc,
            goodsId: GoodsId,
            goodsName: GoodsName,
            img: Img,
            number: orderItem.Number,
            price: Price,
            subTotal: Number.parseFloat(orderItem.Number * Price).toFixed(2),
            status: Status
          })
        })
        return arr
      }
      state.orderADetail = modifyOrderADetail(orderADetail)
      state.orderBList = mofifyOrderBList(orderBList)
    }
  },
  actions: {
    async generateOrdersListsAction ({ dispatch, commit, state, rootState }, limit) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      commit('generateOrdersListsMutation', await Order.GetOrderList({userId, limit}, true))
      commit('handleLoading', null, { root: true })
    },
    generateOrdersDetailAction ({ dispatch, commit, rootState }, orderId) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      Order.GetOrderDetail({userId, orderId}, true).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('generateOrdersDetailMutation', res)
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleOrdersAddAction ({ dispatch, commit, state }, instance) {
      if (state.isSubmit) {
        return window.confirm('您已经成功提交订单，请不要重复提交。')
      }
      commit('handleUserInfoCheckMutation', null, { root: true })
      commit('handleLoading', null, { root: true })
      let { cartLists, addressDefault } = instance
      let { userId, addressId } = addressDefault
      let goodsId = []
      let specId = []
      let specName = []
      let number = []
      let desc = []
      cartLists.forEach(good => {
        goodsId.push(good.goodsId)
        specId.push(good.specId)
        specName.push(good.specName)
        number.push(good.number)
        desc.push('')
      })
      let formData = {
        userId,
        addressId,
        goodsId: goodsId.join('##'),
        specId: specId.join('##'),
        specName: specName.join('##'),
        number: number.join('##'),
        desc: desc.join('##')
      }
      Order.AddOrder(formData, true).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('handleSubmit', true)
          dispatch('address/handleAddressSetDefaultAction', addressId, { root: true })
          let isMobile = /Mobile/i.test(navigator.userAgent)
          if (isMobile) {
            router.push({ name: 'payMobile', params: { sign: res.sign, instance: res } })
          } else {
            router.push({ name: 'orders', params: { sign: res.sign, instance: res } })
          }
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleOrdersBcPay ({ dispatch, commit, state, rootGetters }, instance) {
      if (process.env.NODE_ENV === 'production') {
        instance.returnUrl = 'https://shop.abpao.com/result'
      } else {
        instance.returnUrl = 'http://localhost:8090/result'
      }
      let { amount, orderId, sign, title, returnUrl, instantChannel } = instance
      BC.err = (data) => {
        // 注册错误信息接受
        alert(data['ERROR'])
      }
      // 需要支付时调用BC.click接口传入参数
      BC.click({
        title, // 商品名
        amount, // 总价（分）
        out_trade_no: orderId, // 自定义订单号
        sign, // 商品信息hash值，含义和生成方式见下文
        return_url: returnUrl, // 支付成功后跳转的商户页面,可选，默认为http://payservice.beecloud.cn/spay/result.php
        instant_channel: instantChannel
      })
    }
  }
}

export default orders
