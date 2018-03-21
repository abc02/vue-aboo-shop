import 'normalize.css'
import 'animate.css'
import 'styles/reset.scss'
import 'styles/common.scss'
import '../../node_modules/fonts.css/fonts.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-carbon.css'
// import 'styles/theme.less'
Vue.use(MuseUI)
Vue.use(ElementUI)

export default {
  data: {
    isMobile: /Mobile/i.test(navigator.userAgent)
  }
}
