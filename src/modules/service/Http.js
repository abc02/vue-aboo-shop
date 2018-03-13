import axios from 'axios'
import qs from 'qs'
import Index from 'pages/index/router/index.js'
export default class Http {
  static request (method, url, data, isHeaders) {
    let params
    let headers = this.createAuthHeader()
    console.log(isHeaders, headers)
    if (isHeaders) {
      params = {
        url,
        data: qs.stringify(data),
        method,
        headers
      }
    } else {
      params = {
        url,
        data: qs.stringify(data),
        method
      }
    }
    console.log('req', params)
    return new Promise((resolve, reject) => {
      axios.request(params).then(res => {
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
    // console.log(res)
    // debugger
    const OUTER_STATUS = res.status
    const INNER_STATUS = res.data.ret
    // 请求错误
    if (OUTER_STATUS !== 200) {
      return false
    }
    // 请求成功 1003 Token 超时或未登录，认证失败
    if (INNER_STATUS === 1003) {
      let sessionKey = sessionStorage.getItem('sessionKey')
      sessionStorage.removeItem(sessionKey)
      sessionStorage.removeItem('sessionKey')
      Index.push({ name: 'login' })
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
  static createAuthHeader (JwtToken) {
    const header = {}
    let sessionKey = sessionStorage.getItem('sessionKey')
    let userInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    if (userInfo) {
      header['Authorization'] = userInfo.JwtToken
    }
    return header
  }

  static get (url, data, isHeaders) {
    return this.request('GET', url, data, isHeaders)
  }

  static put (url, data, isHeaders) {
    return this.request('PUT', url, data, isHeaders)
  }

  static post (url, data, isHeaders) {
    return this.request('POST', url, data, isHeaders)
  }

  static patch (url, data, isHeaders) {
    return this.request('PATCH', url, data, isHeaders)
  }

  static delete (url, data, isHeaders) {
    return this.request('DELETE', url, data, isHeaders)
  }
}
