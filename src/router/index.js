import Vue from 'vue'
import Router from 'vue-router'
import NavigationBarTopHeader from 'components/NavigationBarTopHeader.vue'
import NavigationBarStorePage from 'components/NavigationBarStorePage.vue'
import NavigationBarCartHeader from 'components/NavigationBarCartHeader.vue'
import NavigationBarBuyHeader from 'components/NavigationBarBuyHeader.vue'
import FooterPage from 'components/FooterPage.vue'
import FooterBottom from 'components/FooterBottom.vue'
// 商城首页
import Index from 'components/Index.vue'
import Store from '../components/Store.vue'
// 产品页
import Product from '../components/Product.vue'
// 购物车
import Cart from '../components/Cart.vue'
// PC
import Buy from '../components/Buy.vue'
import AddressPreviewLists from 'components/address/AddressPreviewLists.vue'
import OrdersPreview from '../components/OrdersPreview.vue'

// modile
import Orders from '../components/Orders.vue'
import Summary from '../components/Summary.vue'
import Pay from '../components/Pay.vue'
import Address from '../components/Address.vue'
import Select from '../components/Select.vue'
import Result from '../components/Result.vue'
// 登录模块
// import Enter from 'components/login/Enter.vue'
import LogIn from 'components/login/LogIn.vue'
import Register from 'components/login/Register.vue'
import Forgot from 'components/login/Forgot.vue'

// 订单订单
import OrdersLists from 'components/orders/OrdersLists.vue'

import qs from 'qs'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: { name: 'index' },
    children: [
      {
        path: 'index',
        name: 'index',
        components: {
          default: Store,
          topheader: NavigationBarTopHeader,
          pageheader: NavigationBarStorePage,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        meta: {
          title: 'ABOO商城'
        }
      },
      {
        path: 'product/:goodsId',
        name: 'product',
        components: {
          default: Product,
          topheader: NavigationBarTopHeader,
          pageheader: NavigationBarStorePage,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true }
      },
      {
        path: 'cart',
        name: 'cart',
        components: {
          default: Cart,
          pageheader: NavigationBarCartHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true }
      },
      {
        path: 'buy',
        name: 'buy',
        components: {
          default: Buy,
          pageheader: NavigationBarBuyHeader,
          bottomfooter: FooterBottom
        },
        props: { default: true },
        children: [
          {
            path: 'checkout',
            name: 'checkout',
            components: {
              // default: Checkout,
              addressPreviewLists: AddressPreviewLists,
              ordersPreview: OrdersPreview
            },
            // props: { default: true }
            meta: {
              title: '在线购买 | ABOO商城'
            }
          }
        ]
      },
      {
        path: 'orders',
        name: 'orders',
        components: {
          default: Orders,
          pageheader: NavigationBarBuyHeader,
          bottomfooter: FooterBottom
        },
        children: [
          {
            path: 'summary',
            name: 'summary',
            components: {
              summary: Summary
            },
            props: { summary: true },
            meta: {
              title: '提交订单'
            }
          },
          {
            path: 'pay/:sign',
            name: 'pay',
            components: {
              pay: Pay
            },
            props: { pay: true },
            meta: {
              title: '去支付'
            }
          }
        ]
      },
      {
        path: 'address',
        name: 'address',
        components: {
          default: Address,
          pageheader: NavigationBarBuyHeader,
          bottomfooter: FooterBottom
        },
        children: [
          {
            path: 'select',
            name: 'select',
            components: {
              select: Select
            },
            meta: {
              title: '选择地址'
            }
          }
        ]
      },
      {
        path: 'result',
        name: 'result',
        components: {
          default: Result,
          pageheader: NavigationBarBuyHeader,
          bottomfooter: FooterBottom
        },
        meta: {
          title: '支付结果'
        }
      },
      {
        path: '/login',
        name: 'login',
        components: {
          default: LogIn,
          pageheader: NavigationBarStorePage,
          bottomfooter: FooterBottom
        },
        // component: LogIn,
        meta: {
          title: '登录'
        }
      },
      {
        path: '/register',
        name: 'register',
        // component: Register,
        components: {
          default: Register,
          pageheader: NavigationBarStorePage,
          bottomfooter: FooterBottom
        },
        meta: {
          title: '注册'
        }
      },
      {
        path: '/forgot',
        name: 'forgot',
        // component: Forgot,
        components: {
          default: Forgot,
          pageheader: NavigationBarStorePage,
          bottomfooter: FooterBottom
        },
        meta: {
          title: '忘记密码'
        }
      },
      {
        path: 'orderslists',
        name: 'orderslists',
        components: {
          default: OrdersLists,
          pageheader: NavigationBarStorePage,
          bottomfooter: FooterBottom
        },
        // component: OrdersLists,
        meta: {
          title: '我的订单'
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

let { page } = qs.parse(location.search.substr(1))
if (page) {
  router.push({ name: page })
}

export default router
