
import Vue from 'vue'
import Base from 'mixins/Base'

import VueSessionStorage from 'vue-sessionstorage'
import qs from 'qs'

//  登录服务层
import LogInServices from 'modules/service/LogInServices'

//  登录组件
import PhoneLoginAccount from 'components/PhoneLoginAccount'
import PhoneRegisterAccount from 'components/PhoneRegisterAccount'
import PhonePasswordGet from 'components/PhonePasswordGet'

// 资源
import LogInImg from 'assets/ab-02.png'

Vue.use(VueSessionStorage)
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  components: {
    'phone-login-account': PhoneLoginAccount,
    'phone-register-account': PhoneRegisterAccount,
    'phone-password-get': PhonePasswordGet
  },
  data: {
    logInImg: LogInImg,
    logInText: '登录',
    logInIndex: '1' // 1 登录 2 注册 3 找回密码
  },
  methods: {
    switchLogIn (index, text) {
      this.logInIndex = index
      this.logInText = text
    },
    SendSms (formData) {
      LogInServices.SendSms(formData).then(res => {
        if (res.data.ret === 1001) {
          this.$message({message: res.data.code, type: 'success'})
          if (formData.style === 2) return this.$refs.register.onCb(60)
          if (formData.style === 3) return this.$refs.password.onCb(60)
        }
        if (res.data.ret === 1002) return this.$message({message: res.data.code, type: 'warning'})
      })
    },
    PhoneLoginAccount (formData) {
      LogInServices.PhoneLoginAccount(formData).then(res => {
        if (res.data.ret === 1001) {
          let userInfoString = qs.stringify(res.data)
          this.$session.set('userInfo', userInfoString)
          location.href = 'profile.html'
        }
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    PhoneRegisterAccount (formData) {
      LogInServices.PhoneRegisterAccount(formData).then(res => {
        if (res.data.ret === 1001) return this.$message({message: res.data.code, type: 'success'})
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    PhonePasswordGet (formData) {
      LogInServices.PhonePasswordGet(formData).then(res => {
        if (res.data.ret === 1001) return this.$message({message: res.data.code, type: 'success'})
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    }
  },
  created () {
    let isUserInfo = this.$session.exists('userInfo')
    if (isUserInfo) {
      location.href = 'profile.html'
    }
  }
})
