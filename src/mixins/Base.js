import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar from 'components/NavigationBar'
import Foot from 'components/Foot'
import qs from 'qs'
Vue.use(ElementUI)
export default {
  components: {
    'navigation-bar': NavigationBar,
    'foot': Foot
  },
  data: {
    loading: false,
    userInfo: null
  },
  methods: {
    handleLoading () {
      this.loading = !this.loading
    },
    handleCkeckUserInfo () {
      let isUserInfo = this.$session.exists('userInfo')
      if (!isUserInfo) {
        location.href = 'login.html'
      }
      let userInfoString = this.$session.get('userInfo')
      this.userInfo = qs.parse(userInfoString)
    }
  },
  created () {
    // let isUserInfo = this.$session.exists('userInfo')
    // let isLogIn = (location.pathname.search('login') > -1)
    // if (!isUserInfo && !isLogIn) {
    //   location.href = 'login.html'
    // }
  }
}
