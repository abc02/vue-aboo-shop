// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Order {
  // 添加订单
  static AddOrder (data, isHeaders) {
    return Http.post(url.AddOrder, data, isHeaders)
  }
  // 获取订单列表
  static GetOrderList (data, isHeaders) {
    return Http.post(url.GetOrderList, data, isHeaders)
  }
  // 获取订单详情
  static GetOrderDetail (data, isHeaders) {
    return Http.post(url.GetOrderDetail, data, isHeaders)
  }
  // 确认收货
  static ConfirmOrder (data, isHeaders) {
    return Http.post(url.ConfirmOrder, data, isHeaders)
  }
}

export default Order
