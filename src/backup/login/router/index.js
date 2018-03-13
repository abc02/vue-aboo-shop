import Vue from 'vue'
import Router from 'vue-router'
import Enter from '../components/Enter.vue'
import LogIn from '../components/LogIn.vue'
import Register from '../components/Register.vue'
import Forgot from '../components/Forgot.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Enter,
    redirect: { name: 'login' },
    children: [
      {
        path: '/login',
        name: 'login',
        component: LogIn
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/forgot',
        name: 'forgot',
        component: Forgot
      }
    ]
  }
]
const router = new Router({
  routes
})
router.push({ name: 'login' })

export default router
