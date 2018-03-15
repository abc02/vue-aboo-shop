import Http from './Http.js'
import url from './Api.js'

class LogIn {
  static SendSms (data, isHeaders = false) {
    return Http.post(url.SendSms, data, isHeaders)
  }
  // static PhoneLoginAccount (data) {
  //   return Http.post(url.PhoneLoginAccount, data)
  // }
  static PhoneRegisterAccount (data, isHeaders = false) {
    return Http.post(url.PhoneRegisterAccount, data, isHeaders)
  }
  static PhonePasswordGet (data, isHeaders = false) {
    return Http.post(url.PhonePasswordGet, data, isHeaders)
  }
  static MallsLoginAccount (data, isHeaders = false) {
    return Http.post(url.MallsLoginAccount, data, isHeaders)
  }
}

export default LogIn
