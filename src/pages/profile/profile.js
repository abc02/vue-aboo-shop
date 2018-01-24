import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar from 'components/NavigationBar'
import PhoneLoginAccount from 'components/PhoneLoginAccount'
import PhoneRegisterAccount from 'components/PhoneRegisterAccount'
import PhonePasswordGet from 'components/PhonePasswordGet'
import Foot from 'components/Foot'
import LogInImg from 'assets/ab-02.png'
Vue.use(ElementUI)
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
      console.log(index, text)
      this.logInIndex = index
      this.logInText = text
    },
    SendSms (style) {
      console.log(style)
    },
    PhoneLoginAccount (formData) {
      console.log('PhoneLoginAccount')
    },
    PhoneRegisterAccount (formData) {
      console.log('PhoneRegisterAccount')
    },
    PhonePasswordGet (formData) {
      console.log('PhonePasswordGet')
    }
  }
})
