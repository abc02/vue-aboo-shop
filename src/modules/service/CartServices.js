// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Cart {
  // 添加购物车
  static AddShopCart (data, isHeaders = false) {
    return Http.post(url.AddShopCart, data, isHeaders)
  }
  // 获取购物车
  static GetShopCart (data, isHeaders = false) {
    return Http.post(url.GetShopCart, data, isHeaders)
  }
  //  删除购物车指定商品
  static DelShopCart (data, isHeaders = false) {
    return Http.post(url.DelShopCart, data, isHeaders)
  }
}

export default Cart
