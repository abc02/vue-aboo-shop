// import Fetch from './Fetch.js'
import Http from './Http.js'
import url from './Api.js'

class Address {
  // 添加收获地址
  static AddAddress (data, isHeaders = false) {
    return Http.post(url.AddAddress, data, isHeaders)
  }
  // 获取用户收货地址列表
  static GetAddressList (data, isHeaders = false) {
    return Http.post(url.GetAddressList, data, isHeaders)
  }
  // 修改收货地址
  static UpdateAddress (data, isHeaders = false) {
    return Http.post(url.UpdateAddress, data, isHeaders)
  }
  // 将地址设为默认
  static UpdateAddressDefault (data, isHeaders = false) {
    return Http.post(url.UpdateAddressDefault, data, isHeaders)
  }
  // 删除指定地址
  static DeleteAddress (data, isHeaders = false) {
    return Http.post(url.DeleteAddress, data, isHeaders)
  }
}

export default Address
