import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/Cart.vue'
import All from '../components/All.vue'
Vue.use(Router)

const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    children: [
      {
        path: '',
        component: All,
        meta: {
          title: '我的购物车'
        }
      }
    ]
  }
]

const router = new Router({
  routes
})
router.push({ name: 'cart' })

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
