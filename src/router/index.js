import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [

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
