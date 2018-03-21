import Vue from 'vue'
import Router from 'vue-router'

// 通用底部组件
import FooterPage from 'components/FooterPage.vue'
import FooterBottom from 'components/FooterBottom.vue'

// 网页布局
import Layout from 'components/Layout.vue'

// PC端控制入口
import Index from 'components/pc/Index.vue'
// 首页所需组件, 顶部，头部，轮播，列表，详情页
import NavigationBarTopHeader from 'components/pc/NavigationBarTopHeader.vue'
import NavigationBarStorePage from 'components/pc/NavigationBarStorePage.vue'
// import ProductsLists from 'components/pc/ProductsLists.vue'
import Product from 'components/pc/Product.vue'

// 购物车页所需头部，
import NavigationBarCartHeader from 'components/pc/NavigationBarCartHeader.vue'
import Cart from 'components/pc/Cart.vue'

// 支付页所需组件 头部，地址预览，订单预览
import NavigationBarBuytHeader from 'components/pc/NavigationBarBuyHeader.vue'
import Buy from 'components/pc/Buy.vue'
import AddressPreviewLists from 'components/pc/AddressPreviewLists.vue'
import OrdersPreview from 'components/pc/OrdersPreview.vue'

// 用户页所需组件
import NavigationBarUserHeader from 'components/pc/NavigationBarUserHeader.vue'
import User from 'components/pc/User.vue'
import NavigationBarLeft from 'components/pc/NavigationBarLeft.vue'
// import UserInfo from 'components/pc/UserInfo.vue'
import OrdersLists from 'components/pc/OrdersLists.vue'
import OrderDetail from 'components/pc/OrderDetail.vue'
import AddressLists from 'components/pc/AddressLists.vue'
// 支付页面所需组件
import Pay from 'components/pc/Pay.vue'

// Mobile端控制入口
import IndexMobile from 'components/mobile/Index.vue'
// 首页所需组件, 头部，轮播，列表，详情页
import NavigationBarMobileHeader from 'components/mobile/NavigationBarMobileHeader.vue'
// import ProductsListsMobile from 'components/mobile/ProductsLists.vue'
import ProductMobile from 'components/mobile/Product.vue'
// 购车车页
import CartMobile from 'components/mobile/Cart.vue'
// 用户页 我的账户 我的订单
import UserMobile from 'components/mobile/User.vue'
import OrdersListsMobile from 'components/mobile/OrdersLists.vue'
// 支付页面
import Orders from 'components/mobile/Orders.vue'
import Summary from 'components/mobile/Summary.vue'
import PayMobile from 'components/mobile/Pay.vue'
import Select from 'components/mobile/Select.vue'

// 支付成功返回模块
import NavigationBarResultPage from 'components/NavigationBarResultPage.vue'
import Result from 'components/Result.vue'
// 登录模块
import NavigationBarLoginHeader from 'components/login/NavigationBarLoginHeader.vue'
import LogIn from 'components/login/LogIn.vue'
import Register from 'components/login/Register.vue'
import Forgot from 'components/login/Forgot.vue'

import qs from 'qs'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: { path: '/' },
    component: Layout,
    children: [
      {
        path: '',
        components: {
          default: Index,
          topheader: NavigationBarTopHeader,
          pageheader: NavigationBarStorePage,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true, pagefooter: { className: 'footer-page-aboo' } },
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
        props: { default: true, pagefooter: { className: 'footer-page-aboo' } },
        meta: {
          title: '购买产品'
        }
      },
      {
        path: '/user',
        name: 'user',
        redirect: { name: 'orderslists' },
        components: {
          default: User,
          pageheader: NavigationBarUserHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true, pagefooter: { className: 'footer-page-aboo' } },
        children: [
          // {
          //   path: 'info',
          //   name: 'info',
          //   components: {
          //     default: UserInfo,
          //     navigationBarLeft: NavigationBarLeft
          //   },
          //   props: { navigationBarLeft: { activeIndex: '1' } },
          //   meta: {
          //     title: '我的账户'
          //   }
          // },
          {
            path: 'orderslists',
            name: 'orderslists',
            components: {
              default: OrdersLists,
              navigationBarLeft: NavigationBarLeft
            },
            props: { navigationBarLeft: { activeIndex: '1' } },
            meta: {
              title: '我的订单'
            }
          },
          {
            path: 'ordersdetail/:orderId',
            name: 'ordersdetail',
            components: {
              default: OrderDetail,
              navigationBarLeft: NavigationBarLeft
            },
            props: { navigationBarLeft: { activeIndex: '1' }, default: true },
            meta: {
              title: '我的订单详情'
            }
          },
          {
            path: 'addresslists',
            name: 'addresslists',
            components: {
              default: AddressLists,
              navigationBarLeft: NavigationBarLeft
            },
            props: { navigationBarLeft: { activeIndex: '2' } },
            meta: {
              title: '我的收货地址'
            }
          }
          // {
          //   path: 'addressform/:type',
          //   name: 'addressform',
          //   components: {
          //     default: AddressForm,
          //     navigationBarLeft: NavigationBarLeft
          //   },
          //   props: { navigationBarLeft: { activeIndex: '3' }, default: true },
          //   meta: {
          //     title: '编辑地址'
          //   }
          // }
        ]
      },
      {
        path: '/cart',
        name: 'cart',
        components: {
          default: Cart,
          pageheader: NavigationBarCartHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true, pagefooter: { className: 'fixed-bottom footer-page-aboo' } },
        meta: {
          title: '我的购物车'
        }
      },
      {
        path: '/buy',
        name: 'buy',
        components: {
          default: Buy,
          pageheader: NavigationBarBuytHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true, pagefooter: { className: 'footer-page-aboo' } },
        children: [
          {
            path: 'checkout',
            name: 'checkout',
            components: {
              addressPreviewLists: AddressPreviewLists,
              ordersPreview: OrdersPreview
            },
            meta: {
              title: '在线购买'
            }
          }
        ]
      },
      {
        path: '/orders/:sign',
        name: 'orders',
        components: {
          default: Pay,
          pageheader: NavigationBarStorePage,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true, pagefooter: { className: 'fixed-bottom footer-page-aboo' } },
        meta: {
          title: '去支付'
        }
      },
      {
        path: '/mobile',
        name: 'mobile',
        redirect: { path: '/mobile' },
        components: {
          default: Layout,
          pageheader: NavigationBarMobileHeader,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        children: [
          {
            path: '',
            components: {
              default: IndexMobile
            },
            meta: {
              title: 'ABOO商城'
            }
          },
          {
            path: 'product/:goodsId',
            name: 'productMobile',
            components: {
              default: ProductMobile
            },
            props: { default: true },
            meta: {
              title: '产品页'
            }
          },
          {
            path: 'cart',
            name: 'cartMobile',
            components: {
              default: CartMobile
            },
            props: { default: true },
            meta: {
              title: '我的购物车'
            }
          },
          {
            path: 'user',
            name: 'userMobile',
            components: {
              default: UserMobile
            },
            props: { default: true },
            meta: {
              title: '我的账户'
            }
          },
          {
            path: 'orderslists',
            name: 'orderslistsMobile',
            components: {
              default: OrdersListsMobile
            },
            props: { default: true },
            meta: {
              title: '我的订单'
            }
          },
          {
            path: 'orders',
            name: 'ordersMobile',
            components: {
              default: Orders
            },
            children: [
              {
                path: 'summary',
                name: 'summary',
                components: {
                  default: Summary
                },
                props: { default: true },
                meta: {
                  title: '提交订单'
                }
              },
              {
                path: 'pay/:sign',
                name: 'payMobile',
                components: {
                  default: PayMobile
                },
                props: { default: true },
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
              default: Select
            },
            props: { default: true },
            meta: {
              title: '选择地址'
            }
          }
        ]
      },
      {
        path: '/result',
        name: 'result',
        components: {
          default: Result,
          pageheader: NavigationBarResultPage,
          pagefooter: FooterPage,
          bottomfooter: FooterBottom
        },
        props: { default: true, pagefooter: { className: 'fixed-bottom footer-page-aboo' } },
        meta: {
          title: '支付结果'
        }
      },
      {
        path: '/login',
        name: 'login',
        components: {
          default: LogIn,
          pageheader: NavigationBarLoginHeader,
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
          pageheader: NavigationBarLoginHeader,
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
          pageheader: NavigationBarLoginHeader,
          bottomfooter: FooterBottom
        },
        meta: {
          title: '忘记密码'
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
