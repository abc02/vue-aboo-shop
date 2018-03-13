import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index.js'
import Index from 'components/Index.vue'
import NavigationBarUserHeader from 'components/NavigationBarUserHeader.vue'
import FooterPage from 'components/FooterPage.vue'
import FooterBottom from 'components/FooterBottom.vue'

// import NavigationBarLeft from '../components/NavigationBarLeft.vue'
import User from '../components/User.vue'
import UserPreview from '../components/UserPreview.vue'
import Profile from '../components/Profile.vue'
import Orders from '../components/Orders.vue'
import OrdersLists from '../components/OrdersLists.vue'
import OrderDetail from '../components/OrderDetail.vue'
import Address from '../components/Address.vue'
import AddressLists from '../components/AddressLists.vue'
import AddressForm from '../components/AddressForm.vue'

import qs from 'qs'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: { name: 'user' },
    children: [
      {
        path: '/user',
        name: 'user',
        redirect: { name: 'preview' },
        components: {
          default: User,
          pageheader: NavigationBarUserHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        meta: {
          title: 'ABOO商城'
        },
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
  }
]

const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
    Store.commit('handleTitle', to.meta.title)
  }
  next()
})

let isMobile = /Mobile/i.test(navigator.userAgent)
if (isMobile) {
  router.push({ name: 'orderslists' })
} else {
  let { page } = qs.parse(location.search.substr(1))
  if (page) {
    router.push({ name: page })
  } else {
    // router.push({ name: 'preview' })
  }
}

export default router
