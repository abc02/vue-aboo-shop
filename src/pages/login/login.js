// import './login.scss'
import Vue from 'vue'
// 引用通用依赖
import Base from 'mixins/Base'
// import VueSessionStorage from 'vue-sessionstorage'
// import qs from 'qs'
import store from './store/index.js'
import router from './router/index.js'
//  服务层
// import SignServices from 'modules/service/SignServices'

// 引入组件
// import SignIn from 'components/SignIn'
// import SignUp from 'components/SignUp'
// import SignForgot from 'components/SignForgot'

// 资源
// import LogInAboo from 'assets/login-aboo.png'
// import LogInBg from 'assets/login-bg.png'
// Vue.use(VueSessionStorage)
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  store,
  router
  // components: {
  //   // 'phone-login-account': PhoneLoginAccount,
  //   // 'phone-register-account': PhoneRegisterAccount,
  //   // 'phone-password-get': PhonePasswordGet,
  //   'sign-in': SignIn,
  //   'sign-up': SignUp,
  //   'sign-forgot': SignForgot
  // },
  // data: {
  //   logInAboo: LogInAboo,
  //   logInBg: LogInBg,
  //   signText: '登录',
  //   signStatus: 1 // 1 登录 2 注册 3 找回密码
  // },
  // methods: {
  //   handleClickSignStatus (status, text) {
  //     this.signStatus = status
  //     this.signText = text
  //   },
  //   SendSms (formData) {
  //     SignServices.SendSms(formData).then(res => {
  //       if (res.data.ret === 1001) {
  //         this.$message({message: res.data.code, type: 'success'})
  //         if (formData.style === 2) return this.$refs.register.onCb(60)
  //         if (formData.style === 3) return this.$refs.password.onCb(60)
  //       }
  //       if (res.data.ret === 1002) return this.$message({message: res.data.code, type: 'warning'})
  //     })
  //   },
  //   PhoneLoginAccount (formData) {
  //     SignServices.PhoneLoginAccount(formData).then(res => {
  //       if (res.data.ret === 1001) {
  //         let userInfoString = qs.stringify(res.data)
  //         this.$session.set('userInfo', userInfoString)
  //         location.href = 'user.html'
  //       }
  //       if (res.data.ret === 1002) return this.$message.error(res.data.code)
  //     })
  //   },
  //   PhoneRegisterAccount (formData) {
  //     SignServices.PhoneRegisterAccount(formData).then(res => {
  //       if (res.data.ret === 1001) return this.$message({message: res.data.code, type: 'success'})
  //       if (res.data.ret === 1002) return this.$message.error(res.data.code)
  //     })
  //   },
  //   PhonePasswordGet (formData) {
  //     SignServices.PhonePasswordGet(formData).then(res => {
  //       if (res.data.ret === 1001) return this.$message({message: res.data.code, type: 'success'})
  //       if (res.data.ret === 1002) return this.$message.error(res.data.code)
  //     })
  //   }
  // },
  // created () {
  //   let isUserInfo = this.$session.exists('userInfo')
  //   if (isUserInfo) {
  //     location.href = 'user.html'
  //   }
  // }
})
