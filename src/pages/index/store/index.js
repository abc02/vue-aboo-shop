import Vue from 'vue'
import Vuex from 'vuex'
import Common from 'modules/service/CommonServices.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false,
    loading: false,
    userInfo: null
  },
  mutations: {
    handleLoading (state) {
      state.loading = !state.loading
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
})

export default store
