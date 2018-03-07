// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Order {
  // 添加订单
  static AddOrder (data) {
    return Http.post(url.AddOrder, data)
  }
  // 获取订单列表
  static GetOrderList (data) {
    return Http.post(url.GetOrderList, data)
  }
  // 获取订单详情
  static GetOrderDetail (data) {
    return Http.post(url.GetOrderDetail, data)
  }
  // 确认收货
  static ConfirmOrder (data) {
    return Http.post(url.ConfirmOrder, data)
  }
}

export default Order
