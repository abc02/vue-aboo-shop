import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Mobile from '../components/Mobile.vue'
import Help from '../components/Help.vue'
import qs from 'qs'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'ABOO阿布跑跑-孩子去哪儿，轻松知晓'
    }
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: Mobile,
    meta: {
      title: 'ABOO阿布跑跑-孩子去哪儿，轻松知晓-H5'
    }
  },
  {
    path: '/help',
    name: 'help',
    component: Help,
    meta: {
      title: '使用帮助'
    }
  }
]

const router = new Router({
  routes
})

let isMobile = /Mobile/i.test(navigator.userAgent)
if (isMobile) {
  router.push({ name: 'mobile' })
} else {
  let { page } = qs.parse(location.search.substr(1))
  if (page) {
    router.push({ name: page })
  } else {
    router.push('/')
  }
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
