// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Cart {
  // 添加购物车
  static AddShopCart (data, headers) {
    return Http.post(url.AddShopCart, data, headers)
  }
  // 获取购物车
  static GetShopCart (data, headers) {
    return Http.post(url.GetShopCart, data, headers)
  }
  //  删除购物车指定商品
  static DelShopCart (data, headers) {
    return Http.post(url.DelShopCart, data, headers)
  }
}

export default Cart
