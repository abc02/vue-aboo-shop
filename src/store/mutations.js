import router from 'pages/index/router/index.js'
import qs from 'qs'
const mutations = {
  handleLoading (state) {
    state.isLoading = !state.isLoading
  },
  handleUserInfoMutation (state, instance) {
    if (instance.ret === 1001) {
      let { BindingNum, Ciphertext, Icon, JwtToken, NickName, UserId } = instance
      let userInfo = {
        bindingNum: BindingNum,
        ciphertext: Ciphertext,
        icon: Icon,
        JwtToken,
        nickName: NickName,
        userId: UserId
      }
      state.userInfo = userInfo
      let key = 'userInfo'
      sessionStorage.setItem('sessionKey', key)
      sessionStorage.setItem(key, JSON.stringify(userInfo))
      let isMobile = /Mobile/i.test(navigator.userAgent)
      if (isMobile) {
        router.push({ name: 'mobile' })
      } else {
        router.push('/')
      }
    }
    if (instance.ret === 1002) window.confirm(instance.code)
  },
  generateUserInfoMutation (state) {
    let sessionKey = sessionStorage.getItem('sessionKey')
    let sessionUserInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    let urlUserInfo = qs.parse(location.search.substr(1))
    if (sessionUserInfo) {
      state.userInfo = sessionUserInfo
    } else if (urlUserInfo) {
      state.userInfo = urlUserInfo
    } else {
      state.userInfo = null
    }
  },
  handleUserInfoCheckMutation (state) {
    if (!state.userInfo) router.push({ name: 'login' })
  },
  handleUserInfoOutMutation (state, page) {
    console.log(page)
    let sessionKey = sessionStorage.getItem('sessionKey')
    sessionStorage.removeItem(sessionKey)
    sessionStorage.removeItem('sessionKey')
    state.userInfo = null
    let isMobile = /Mobile/i.test(navigator.userAgent)
    if (isMobile) {
      router.push({ name: 'mobileIndex' })
    } else {
      if (page) {
        router.push({ name: page })
      } else {
        router.push({ path: '/' })
      }
    }
  }
}

export default mutations
