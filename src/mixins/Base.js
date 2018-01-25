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
Vue.use(ElementUI)
export default {
  components: {
    'navigation-bar': NavigationBar,
    'foot': Foot
  },
  created () {
    // let isUserInfo = this.$session.exists('userInfo')
    // let isLogIn = (location.pathname.search('login') > -1)
    // if (!isUserInfo && !isLogIn) {
    //   location.href = 'login.html'
    // }
  }
}
