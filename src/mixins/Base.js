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
import VueSessionStorage from 'vue-sessionstorage'
import qs from 'qs'
Vue.use(VueSessionStorage)
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
    handleCheckUserInfo () {
      let isUserInfo = this.$session.exists('userInfo')
      if (!isUserInfo) {
        location.href = 'login.html'
      }
      let userInfoString = this.$session.get('userInfo')
      this.userInfo = qs.parse(userInfoString)
    },
    handleClickRedirectIndex () {
      location.href = 'index.html'
    },
    handleClickRedirectHelp () {
      location.href = 'help.html'
    },
    handleClickRedirectProduct (goodsId) {
      location.href = `product.html?goodsId=${goodsId}`
    },
    handleClickRedirectLogIn () {
      location.href = 'login.html'
    },
    handleClickRedirectUser () {
      location.href = 'user.html'
    },
    handleClickRedirectLogOut () {
      this.$session.remove('userInfo')
      location.reload()
    }
  }
}
