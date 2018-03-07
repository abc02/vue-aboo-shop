import Common from 'modules/service/CommonServices.js'
const mutations = {
  handleLoading (state) {
    state.isLoading = !state.isLoading
  },
  generateUserInfo (state) {
    let userInfo = Common.generateSessionStorageUserInfo()
    state.userInfo = userInfo
  },
  generateUserInfoCheck (state) {
    let userInfo = Common.generateSessionStorageUserInfo()
    if (!userInfo) {
      Common.handleRedirectPage('login')
    }
    state.userInfo = userInfo
  }
}

export default mutations
