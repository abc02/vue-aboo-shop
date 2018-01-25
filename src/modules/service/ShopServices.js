// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Shop {
  // 添加收获地址
  static AddAddress (data) {
    return Http.post(url.AddAddress, data)
  }
  // 获取用户收货地址列表
  static GetAddressList (data) {
    return Http.post(url.GetAddressList, data)
  }
  // 获取商品列表
  static GetGoodsList (data) {
    return Http.post(url.GetGoodsList, data)
  }
  // 获取商品规格
  static GetGoodsSpec (data) {
    return Http.post(url.GetGoodsSpec, data)
  }
  // 修改收货地址
  static UpdateAddress (data) {
    return Http.post(url.UpdateAddress, data)
  }
  // 将地址设为默认
  static UpdateAddressDefault (data) {
    return Http.post(url.UpdateAddressDefault, data)
  }
  // 删除指定地址
  static DeleteAddress (data) {
    return Http.post(url.DeleteAddress, data)
  }
  // 添加订单
  static AddOrder (data) {
    return Http.post(url.AddOrder, data)
  }
}

export default Shop
