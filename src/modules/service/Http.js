import axios from 'axios'
import qs from 'qs'
export default class Http {
  static request (method, url, data) {
    const headers = this.createAuthHeader()
    const param = {
      url: url,
      data: qs.stringify(data),
      method: method,
      headers: headers
    }
    return new Promise((resolve, reject) => {
      axios.request(param).then(res => {
        if (this.isSuccess(res)) {
          resolve(res.data)
        } else {
          throw this.requestException(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const OUTER_STATUS = res.status
    // 请求错误
    if (OUTER_STATUS !== 200) {
      return false
    }
    return true
  }

  /**
   * 异常
   */
  static requestException (res) {
    const ERROR = {}
    ERROR.STATUS = res.status
    const DATA = res.data
    if (DATA) {
      ERROR.DATA = DATA
    }
    return ERROR
  }
  /**
   * 构造权限头部
   */
  static createAuthHeader () {
    const header = {}
    let sessionKey = sessionStorage.getItem('sessionKey')
    let isUserInfo = sessionStorage.getItem(sessionKey)
    if (!isUserInfo) return
    let userInfoString = sessionStorage.getItem(sessionKey)
    let userInfo = qs.parse(userInfoString)
    if (userInfo) {
      header['Authorization'] = userInfo.JwtToken
    }
    return header
  }

  static get (url, data) {
    return this.request('GET', url, data)
  }

  static put (url, data) {
    return this.request('PUT', url, data)
  }

  static post (url, data) {
    return this.request('POST', url, data)
  }

  static patch (url, data) {
    return this.request('PATCH', url, data)
  }

  static delete (url, data) {
    return this.request('DELETE', url, data)
  }
}
