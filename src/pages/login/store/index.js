import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router/index.js'
import Common from 'modules/service/CommonServices'
import Sign from 'modules/service/SignServices'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    waitSecond: {},
    intervalId: null
  },
  mutations: {
    handleLoading (state) {
      state.loading = !state.loading
    },
    handleWaitSecondMutation (state, second) {
      if (state.isWaiting) {
        return
      }
      state.waitSecond = second
      state.intervalId = setInterval(_ => {
        state.waitSecond--
        if (state.waitSecond === 0) {
          clearInterval(state.intervalId)
          state.intervalId = null
        }
      }, 1000)
    }
  },
  actions: {
    handleSendSmsAction ({ commit, state }, instance) {
      commit('handleLoading')
      let {phone, style} = instance
      if (!phone) {
        return window.confirm('手机号码不能为空')
      }
      Sign.SendSms({phone, style}).then(res => {
        commit('handleLoading')
        console.log(res)
        if (res.data.ret === 1001) {
          this.$message.success(res.data.code)
          if (style === 2) return this.onCb(60)
          if (style === 3) return this.onCb(60)
        }
        if (res.data.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handlePhoneLoginAction ({ commit, state }, instance) {
      commit('handleLoading')
      Sign.PhoneLoginAccount(instance).then(res => {
        commit('handleLoading')
        if (res.data.ret === 1001) {
          Common.handleSessionStorageUserInfo(res.data)
          Common.handleRedirectPage('user')
        }
        if (res.data.ret === 1002) {
          window.confirm(res.data.code)
        }
      })
    },
    handlePhoneRegisterAction ({ commit, state }, instance) {
      commit('handleLoading')
      Sign.PhoneRegisterAccount(instance).then(res => {
        commit('handleLoading')
        if (res.data.ret === 1001) {
          if (window.confirm(res.data.code)) {
            Router.push({ name: 'login' })
          }
        }
        if (res.data.ret === 1002) {
          window.confirm(res.data.code)
        }
      })
    },
    handlePhoneForgotAction ({ commit, state }, instance) {
      commit('handleLoading')
      Sign.PhonePasswordGet(instance).then(res => {
        commit('handleLoading')
        if (res.data.ret === 1001) {
          if (window.confirm(res.data.code)) {
            Router.push({ name: 'login' })
          }
        }
        if (res.data.ret === 1002) {
          window.confirm(res.data.code)
        }
      })
    },
    handlePhoneSendSmsAction  ({ commit, state }, instance) {
      // style 1 登录 2 注册 3 找回密码
      let { phone, style } = instance
      if (!phone) {
        return window.confirm('手机号码不能为空')
      }
      commit('handleLoading')
      commit('handleWaitSecondMutation', 60)
      Sign.SendSms({phone, style}).then(res => {
        commit('handleLoading')
        if (res.data.ret === 1001) {
          window.confirm(res.data.code)
        }
        if (res.data.ret === 1002) {
          window.confirm(res.data.code)
        }
      })
    }
  }
})

export default store
