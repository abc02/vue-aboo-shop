import Vue from 'vue'
import Router from 'vue-router'
import Order from '../components/Order.vue'
import Summary from '../components/Summary.vue'
import Address from '../components/Address.vue'
import All from '../components/All.vue'
import Form from '../components/Form.vue'
import Pay from '../components/Pay.vue'
Vue.use(Router)

let routes = [
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'summary',
        name: 'summary',
        component: Summary,
        meta: {
          title: '去结算'
        }
      },
      {
        path: 'pay/:sign',
        name: 'pay',
        component: Pay,
        props: true,
        meta: {
          title: '去支付'
        }
      }
    ]
  },
  {
    path: '/address',
    name: 'address',
    component: Address,
    children: [
      {
        path: 'all',
        name: 'all', // 命名路由
        component: All,
        meta: {
          title: '收货地址列表'
        }
      },
      {
        path: 'form/:type',
        name: 'form',
        component: Form,
        beforeEnter: (to, from, next) => {
          // console.log(to, from)
          if (to.params.type === 'add') {
            document.title = '新增收货地址'
          } else {
            document.title = '编辑收货地址'
          }
          // ...
          next()
        },
        meta: {
          title: ''
        },
        props: true
      }
    ]
  }
]
// 创建Router实例
let router = new Router({
  routes
})

router.push({ name: 'summary' })

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
