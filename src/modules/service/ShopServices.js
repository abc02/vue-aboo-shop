import Fetch from './Fetch.js'
import url from './Api.js'

class Shop {
  // 添加收获地址
  static AddAddress (data) {
    return Fetch(url.AddAddress, data)
  }
  // 获取用户收货地址列表
  static GetAddressList (data) {
    return Fetch(url.GetAddressList, data)
  }
  // 获取商品列表
  static GetGoodsList (data) {
    return Fetch(url.GetGoodsList, data)
  }
  // 获取商品规格
  static GetGoodsSpec (data) {
    return Fetch(url.GetGoodsSpec, data)
  }
  // 修改收货地址
  static UpdateAddress (data) {
    return Fetch(url.UpdateAddress, data)
  }
  // 将地址设为默认
  static UpdateAddressDefault (data) {
    return Fetch(url.UpdateAddressDefault, data)
  }
  // 删除指定地址
  static DeleteAddress (data) {
    return Fetch(url.DeleteAddress, data)
  }
  // 添加订单
  static AddOrder (data) {
    return Fetch(url.AddOrder, data)
  }
}

export default Shop
