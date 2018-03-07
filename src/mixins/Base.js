import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
// import NavigationBar from 'components/NavigationBar'
// import Foot from 'components/Foot'
// import VueSessionStorage from 'vue-sessionstorage'
// import qs from 'qs'
// Vue.use(VueSessionStorage)
Vue.use(ElementUI)
export default {}
// export default {
//   components: {
//     'navigation-bar': NavigationBar,
//     'foot': Foot
//   },
//   data: {
//     loading: false,
//     userInfo: null
//   },
//   methods: {
//     handleLoading () {
//       this.loading = !this.loading
//     },
//     handleClickRedirectPage (page, param = null) {
//       if (!param) return (location.href = `${page}.html`)
//       let paramArray = []
//       let paramString = '?'
//       for (let key in param) {
//         paramArray.push(`${key}=${param[key]}`)
//       }
//       paramString += paramArray.join('&')
//       location.href = `${page}.html${paramString}`
//     },
//     handleClickRedirectLogOut () {
//       this.$session.remove('userInfo')
//       location.reload()
//     },
//     generateUserInfo () {
//       let isUserInfo = this.$session.exists('userInfo')
//       if (!isUserInfo) return null
//       let userInfoString = this.$session.get('userInfo')
//       return qs.parse(userInfoString)
//     },
//     generateCheckUserInfo () {
//       let isUserInfo = this.$session.exists('userInfo')
//       if (!isUserInfo) {
//         location.href = 'login.html'
//       }
//       let userInfoString = this.$session.get('userInfo')
//       this.userInfo = qs.parse(userInfoString)
//     }
//   }
// }
