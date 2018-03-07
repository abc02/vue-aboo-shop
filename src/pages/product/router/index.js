import Vue from 'vue'
import Router from 'vue-router'
import Product from '../components/Product.vue'
Vue.use(Router)

let routes = [
  {
    path: '/product',
    name: 'product',
    component: Product,
    meta: {
      title: 'ABOO阿布跑跑-智慧鞋垫'
    }
  }
]
// 创建Router实例
let router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.push({ name: 'product' })

export default router
