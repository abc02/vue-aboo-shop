import Fetch from './Fetch.js'
import url from './Api.js'

class LogIn {
  static SendSms (data) {
    return Fetch(url.SendSms, data)
  }
  // static PhoneLoginAccount (data) {
  //   return Fetch(url.PhoneLoginAccount, data)
  // }
  static PhoneRegisterAccount (data) {
    return Fetch(url.PhoneRegisterAccount, data)
  }
  static PhonePasswordGet (data) {
    return Fetch(url.PhonePasswordGet, data)
  }
  static MallsLoginAccount (data) {
    return Fetch(url.MallsLoginAccount, data)
  }
}

export default LogIn
