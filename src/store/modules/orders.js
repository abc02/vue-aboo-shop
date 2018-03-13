import Common from 'modules/service/CommonServices.js'
import Order from 'modules/service/OrderServices.js'
import Index from 'pages/index/router/index.js'
const orders = {
  namespaced: true,
  state: {
    ordersLists: null,
    orderADetail: null,
    orderBList: null,
    isSubmit: false
  },
  mutations: {
    handleSubmit (state, status) {
      state.isSubmit = status
    },
    generateOrdersListsMutation (state, ordersLists) {
      let modifyOrderLists = instance => {
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
      state.ordersLists = modifyOrderLists(ordersLists)
    },
    generateOrdersDetailMutation (state, instance) {
      let { orderADetail, orderBList } = instance
      // orderADetail
      let modifyOrderADetail = instance => {
        let { Address, CreateTime, Phone, Price, Status } = instance
        let address = JSON.parse(Address)
        let date = Number.parseInt(CreateTime + '000')
        return {
          address,
          addressLonger: `${address.Province} ${address.City} ${address.Area} ${address.Detail} ${address.NickName} ${address.Phone}`,
          createTime: Common.handleCreateTimeText(date),
          payType: '在线支付',
          phone: Phone,
          price: `￥${Number.parseFloat(Price).toFixed(2)}`,
          status: Common.handleOuterStatus(Status)
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
            price: `￥${Number.parseFloat(Price).toFixed(2)}`,
            subTotal: `￥${Number.parseFloat(orderItem.Number * Price).toFixed(2)}`,
            status: Common.handleInnerStatus(Status)
          })
        })
        return arr
      }
      state.orderADetail = modifyOrderADetail(orderADetail)
      state.orderBList = mofifyOrderBList(orderBList)
    }
  },
  actions: {
    generateOrdersListsAction ({ dispatch, commit, rootState }, limit) {
      // 判断是已登录
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      Order.GetOrderList({userId, limit}, true).then(res => {
        console.log(res)
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('generateOrdersListsMutation', res.data)
        }
        if (res.ret === 1002) {
          commit('generateOrdersListsMutation', null)
        }
      })
    },
    generateOrdersDetailAction ({ dispatch, commit, rootState }, orderId) {
      // 判断是已登录
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
    handleOrdersAddAction ({ dispatch, commit, state, rootState, rootGetters }, cartLists) {
      if (state.isSubmit) {
        return window.confirm('您已经成功提交订单，请不要重复提交。')
      }
      commit('handleUserInfoCheckMutation', null, { root: true })
      let { userId, addressId } = rootGetters['address/defaultAddress']
      commit('handleLoading', null, { root: true })
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
      let instance = {
        userId,
        addressId,
        goodsId: goodsId.join('##'),
        specId: specId.join('##'),
        specName: specName.join('##'),
        number: number.join('##'),
        desc: desc.join('##')
      }
      Order.AddOrder(instance, true).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('handleSubmit', true)
          Index.push({ name: 'orders', params: { sign: res.sign, instance: res } })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleOrdersBcPay ({ dispatch, commit, state, rootGetters }, instance) {
      if (process.env.NODE_ENV === 'production') {
        instance.returnUrl = 'https://abupao.com/index.html?page=result'
      } else {
        instance.returnUrl = 'http://localhost:8090/index.html?page=result'
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
