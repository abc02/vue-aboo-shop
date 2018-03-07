import Vue from 'vue'
import Router from 'vue-router'
import NavigationBarStorePage from 'components/NavigationBarStorePage.vue'
import FootCommon from 'components/FootCommon.vue'
import Index from '../components/Index.vue'
import Store from '../components/Store.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        components: {
          default: Store,
          header: NavigationBarStorePage,
          footer: FootCommon
        },
        meta: {
          title: 'ABOO阿布商城'
        }
      }
    ]
  }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
