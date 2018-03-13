import Vue from 'vue'
import Router from 'vue-router'
// 通用导航组件

import NavigationBarBuyHeader from 'components/NavigationBarBuyHeader.vue'
// 通用底部组件
import FooterPage from 'components/FooterPage.vue'
import FooterBottom from 'components/FooterBottom.vue'

// 框架布局主入口
import Index from 'components/Index.vue'

// PC端控制入口
import PC from 'components/PC.vue'
// 首页所需组件, 顶部，头部，轮播，列表，详情页
import NavigationBarTopHeader from 'components/PC/NavigationBarTopHeader.vue'
import NavigationBarStorePage from 'components/PC/NavigationBarStorePage.vue'
import Swiper from 'components/Swiper.vue'
import ProductsLists from 'components/PC/ProductsLists.vue'
import Product from 'components/PC/Product.vue'

// 购物车页所需头部，
import NavigationBarCartHeader from 'components/PC/NavigationBarCartHeader.vue'
import Cart from 'components/PC/Cart.vue'

// 支付页所需组件
import Buy from '../components/Buy.vue'
import AddressPreviewLists from 'components/address/AddressPreviewLists.vue'
import OrdersPreview from '../components/OrdersPreview.vue'

// 用户页所需组件
import NavigationBarUserHeader from 'components/PC/NavigationBarUserHeader.vue'
import User from 'components/users/User.vue'
import NavigationBarLeft from 'components/users/NavigationBarLeft.vue'
import UserInfo from 'components/users/UserInfo.vue'
import Orders from 'components/users/Orders.vue'
import OrdersLists from 'components/users/OrdersLists.vue'
import OrderDetail from 'components/users/OrderDetail.vue'
import Address from 'components/users/Address.vue'
import AddressLists from 'components/users/AddressLists.vue'
import AddressForm from 'components/users/AddressForm.vue'

// Mobile端控制入口
import Mobile from 'components/Mobile.vue'
// 首页所需组件, 头部，轮播，列表，详情页
import NavigationBarStorePageMobile from 'components/Mobile/NavigationBarStorePage.vue'
import ProductsListsMobile from 'components/Mobile/ProductsLists.vue'
import ProductMobile from 'components/Mobile/Product.vue'

// import Orders from '../components/Orders.vue'
import Summary from '../components/Summary.vue'
import Pay from '../components/Pay.vue'
// import Address from '../components/Address.vue'
import Select from '../components/Select.vue'
import Result from '../components/Result.vue'
// 登录模块
// import Enter from 'components/login/Enter.vue'
import LogIn from 'components/login/LogIn.vue'
import Register from 'components/login/Register.vue'
import Forgot from 'components/login/Forgot.vue'

// 订单订单
// import OrdersLists from 'components/orders/OrdersLists.vue'

import qs from 'qs'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        components: {
          default: PC,
          topheader: NavigationBarTopHeader,
          pageheader: NavigationBarStorePage,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        children: [
          {
            path: '',
            components: {
              default: ProductsLists,
              swiper: Swiper
            },
            props: { swiper: { slotNames: 4, swiperHeight: '480px' } },
            meta: {
              title: 'ABOO商城'
            }
          },
          {
            path: 'product/:goodsId',
            name: 'product',
            components: {
              default: Product
            },
            props: { default: true },
            meta: {
              title: '购买产品'
            }
          },
          {
            path: 'buy',
            name: 'buy',
            components: {
              default: Buy
            },
            props: { default: true },
            children: [
              {
                path: 'checkout',
                name: 'checkout',
                components: {
                  addressPreviewLists: AddressPreviewLists,
                  ordersPreview: OrdersPreview
                },
                props: { default: true },
                meta: {
                  title: '在线购买 | ABOO商城'
                }
              }
            ]
          }
        ]
      },
      {
        path: 'user',
        name: 'user',
        components: {
          default: User,
          pageheader: NavigationBarUserHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        children: [
          {
            path: '',
            components: {
              default: UserInfo,
              navigationBarLeft: NavigationBarLeft
            },
            meta: {
              title: '我的账户'
            }
          },
          {
            path: 'addresslists',
            name: 'addresslists',
            components: {
              default: AddressLists,
              navigationBarLeft: NavigationBarLeft
            },
            meta: {
              title: '我的收货地址'
            }
          },
          {
            path: 'addressform/:type',
            name: 'addressform',
            components: {
              default: AddressForm,
              navigationBarLeft: NavigationBarLeft
            },
            meta: {
              title: ''
            },
            props: true
          },
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
        props: { default: true },
        meta: {
          title: '我的购物车'
        }
      },
      {
        path: 'mobile',
        name: 'mobile',
        components: {
          default: Mobile,
          pageheader: NavigationBarStorePageMobile,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        children: [
          {
            path: '',
            components: {
              default: ProductsListsMobile,
              swiper: Swiper
            },
            props: { swiper: { slotNames: 3, swiperHeight: '180px' } }
          },
          {
            path: 'product/:goodsId',
            name: 'product',
            components: {
              default: ProductMobile
            },
            props: { default: true },
            meta: {
              title: '购买产品'
            }
          },
          {
            path: 'orders',
            name: 'orders',
            components: {
              default: Orders
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

let isMobile = /Mobile/i.test(navigator.userAgent)
if (isMobile) {
  router.push({ name: 'mobile' })
}
let { page } = qs.parse(location.search.substr(1))
if (page) {
  router.push({ name: page })
}

export default router
