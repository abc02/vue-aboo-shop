import router from 'router/index.js'
import qs from 'qs'
const mutations = {
  handleLoading (state) {
    state.isLoading = !state.isLoading
  },
  handleUserInfoMutation (state, instance) {
    console.log(instance)
    if (instance.ret === 1001) {
      let { Icon, JwtToken, NickName, UserId } = instance
      let userInfo = {
        // bindingNum: BindingNum,
        // ciphertext: Ciphertext,
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
        router.push({ name: 'mobileIndex' })
      } else {
        console.log('routetr index')
        router.push({ name: 'index' })
      }
    }
    if (instance.ret === 1002) window.confirm(instance.code)
  },
  generateUserInfoMutation (state) {
    let sessionKey = sessionStorage.getItem('sessionKey')
    let sessionUserInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    let urlUserInfo = location.search.substr(1)
    if (sessionUserInfo) {
      console.log(sessionUserInfo)
      state.userInfo = sessionUserInfo
    } else if (urlUserInfo) {
      state.userInfo = qs.parse(urlUserInfo)
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
        router.push({ name: 'index' })
      }
    }
  }
}

export default mutations
