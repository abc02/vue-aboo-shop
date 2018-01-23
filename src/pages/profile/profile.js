import 'normalize.css'
import 'animate.css'
import 'styles/common.css'
import '../../../node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar from 'components/NavigationBar'
import SignIn from 'components/SignIn'
import Foot from 'components/Foot'

Vue.use(ElementUI)
window.vm = new Vue({
  el: '#app',
  components: {
    'navigation-bar': NavigationBar,
    'sign-in': SignIn,
    'foot': Foot
  }
})
