import Fetch from './Fetch.js'
import url from './Api.js'

class LogIn {
  static SendSms (data, isHeaders = false) {
    return Fetch(url.SendSms, data, isHeaders)
  }
  // static PhoneLoginAccount (data) {
  //   return Fetch(url.PhoneLoginAccount, data)
  // }
  static PhoneRegisterAccount (data, isHeaders = false) {
    return Fetch(url.PhoneRegisterAccount, data, isHeaders)
  }
  static PhonePasswordGet (data, isHeaders = false) {
    return Fetch(url.PhonePasswordGet, data, isHeaders)
  }
  static MallsLoginAccount (data, isHeaders = false) {
    return Fetch(url.MallsLoginAccount, data, isHeaders)
  }
}

export default LogIn
