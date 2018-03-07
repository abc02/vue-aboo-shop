// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Cart {
  // 添加购物车
  static AddShopCart (data) {
    return Http.post(url.AddShopCart, data)
  }
  // 获取购物车
  static GetShopCart (data) {
    return Http.post(url.GetShopCart, data)
  }
  //  删除购物车指定商品
  static DelShopCart (data) {
    return Http.post(url.DelShopCart, data)
  }
}

export default Cart
