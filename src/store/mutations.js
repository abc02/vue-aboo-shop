import Index from 'pages/index/router/index.js'
const mutations = {
  handleLoading (state) {
    state.isLoading = !state.isLoading
  },
  generateUserInfo (state) {
    let sessionKey = sessionStorage.getItem('sessionKey')
    let userInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    if (userInfo) {
      let { UserId, NickName, JwtToken, Icon } = userInfo
      state.userInfo = {
        UserId,
        userId: UserId,
        nickName: NickName,
        jwtToken: JwtToken,
        icon: Icon
      }
    } else {
      state.userInfo = null
    }
  },
  generateUserInfoMutation (state) {
    let sessionKey = sessionStorage.getItem('sessionKey')
    let userInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    if (userInfo) {
      let { UserId, NickName, JwtToken, Icon } = userInfo
      state.userInfo = {
        UserId,
        userId: UserId,
        nickName: NickName,
        jwtToken: JwtToken,
        icon: Icon
      }
    } else {
      state.userInfo = null
    }
  },
  handleUserInfoCheckMutation (state) {
    let sessionKey = sessionStorage.getItem('sessionKey')
    let userInfo = JSON.parse(sessionStorage.getItem(sessionKey))
    if (userInfo) {
      let { UserId, NickName, Icon } = userInfo
      state.userInfo = {
        userId: UserId,
        nickName: NickName,
        icon: Icon
      }
    } else {
      Index.push({ name: 'login' })
    }
  },
  handleUserInfoOutMutation (state, page) {
    let sessionKey = sessionStorage.getItem('sessionKey')
    sessionStorage.removeItem(sessionKey)
    sessionStorage.removeItem('sessionKey')
    state.userInfo = null
    if (page) {
      Index.push({ name: page })
    } else {
      Index.push({ path: '/' })
    }
  }
}

export default mutations
