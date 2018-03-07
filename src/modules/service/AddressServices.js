// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Address {
  // 添加收获地址
  static AddAddress (data) {
    return Http.post(url.AddAddress, data)
  }
  // 获取用户收货地址列表
  static GetAddressList (data) {
    return Http.post(url.GetAddressList, data)
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
}

export default Address
