import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import VueSessionStorage from 'vue-sessionstorage'
import qs from 'qs'
import LogInService from 'modules/service/LogInService'
import NavigationBar from 'components/NavigationBar'
import PhoneLoginAccount from 'components/PhoneLoginAccount'
import PhoneRegisterAccount from 'components/PhoneRegisterAccount'
import PhonePasswordGet from 'components/PhonePasswordGet'
import Foot from 'components/Foot'
import LogInImg from 'assets/ab-02.png'
Vue.use(ElementUI)
Vue.use(VueSessionStorage)
window.vm = new Vue({
  el: '#app',
  components: {
    'navigation-bar': NavigationBar,
    'phone-login-account': PhoneLoginAccount,
    'phone-register-account': PhoneRegisterAccount,
    'phone-password-get': PhonePasswordGet,
    'foot': Foot
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
      LogInService.SendSms(formData).then(res => {
        if (res.data.ret === 1001) {
          this.$message({message: res.data.code, type: 'success'})
          if (formData.style === 2) return this.$refs.register.onCb(60)
          if (formData.style === 3) return this.$refs.password.onCb(60)
        }
        if (res.data.ret === 1002) return this.$message({message: res.data.code, type: 'warning'})
      })
    },
    PhoneLoginAccount (formData) {
      LogInService.PhoneLoginAccount(formData).then(res => {
        if (res.data.ret === 1001) {
          let userInfoString = qs.stringify(res.data)
          this.$session.set('userInfo', userInfoString)
          location.href = 'profile.html'
        }
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    PhoneRegisterAccount (formData) {
      LogInService.PhoneRegisterAccount(formData).then(res => {
        if (res.data.ret === 1001) return this.$message({message: res.data.code, type: 'success'})
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    },
    PhonePasswordGet (formData) {
      LogInService.PhonePasswordGet(formData).then(res => {
        if (res.data.ret === 1001) return this.$message({message: res.data.code, type: 'success'})
        if (res.data.ret === 1002) return this.$message.error(res.data.code)
      })
    }
  },
  created () {
  }
})
