import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index.js'
import User from '../components/User.vue'
import UserPreview from '../components/UserPreview.vue'
import Profile from '../components/Profile.vue'
import Orders from '../components/Orders.vue'
import OrdersLists from '../components/OrdersLists.vue'
import OrderDetail from '../components/OrderDetail.vue'
import Address from '../components/Address.vue'
import AddressLists from '../components/AddressLists.vue'
import AddressForm from '../components/AddressForm.vue'
Vue.use(Router)

const routes = [
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'preview',
        name: 'preview',
        component: UserPreview,
        meta: {
          title: '我的账户'
        }
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile,
        meta: {
          title: '我的个人资料'
        }
      },
      {
        path: 'address',
        name: 'address',
        component: Address,
        children: [
          {
            path: 'addresslists',
            name: 'addresslists',
            component: AddressLists,
            meta: {
              title: '我的收货地址'
            }
          },
          {
            path: 'addressform/:type',
            name: 'addressform',
            component: AddressForm,
            beforeEnter: (to, from, next) => {
              // console.log(to, from)
              if (to.params.type === 'add') {
                document.title = '新增收货地址'
                Store.commit('handleTitle', '新增收货地址')
              } else {
                document.title = '编辑收货地址'
                Store.commit('handleTitle', '编辑收货地址')
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
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders,
        children: [
          {
            path: 'orderslists',
            name: 'orderslists',
            component: OrdersLists,
            meta: {
              title: '我的订单'
            }
          },
          {
            path: 'ordersdetail/:orderId',
            name: 'ordersdetail',
            component: OrderDetail,
            props: true,
            meta: {
              title: '我的订单详情'
            }
          }
        ]
      }
    ]
  }
]

const router = new Router({
  routes
})

let isMobile = /Mobile/i.test(navigator.userAgent)
if (isMobile) {
  router.push({ name: 'orderslists' })
} else {
  router.push({ name: 'preview' })
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    Store.commit('handleTitle', to.meta.title)
  }
  next()
})

export default router
