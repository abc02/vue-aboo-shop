import Vue from 'vue'
import Vuex from 'vuex'
import Common from 'modules/service/CommonServices.js'
import Goods from 'modules/service/GoodsServices.js'
import Cart from 'modules/service/CartServices.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    isLoading: false,
    userInfo: null,
    goodsInfo: null,
    priceList: null,
    specDatas: null,
    selectSpecDatas: null,
    number: 1
  },
  getters: {
    specIdArray: state => {
      if (state.specDatas && state.specDatas.length && state.selectSpecDatas) {
        let arr = []
        let keys = Object.keys(state.selectSpecDatas)
        keys.forEach(key => {
          arr.push(state.selectSpecDatas[key])
        })
        return arr
      }
      return []
    },
    currentGoods: (state, getters) => {
      let { goodsInfo, priceList, specDatas, selectSpecDatas, number } = state
      if (priceList && priceList.length && getters.specIdArray && getters.specIdArray.length) {
        let goods
        let spceArray = []
        let xx = getters.specIdArray.join(',')
        state.priceList.forEach(Good => {
          if (Good.SpecId === xx) {
            let { GoodsId, Id, Img, Price, Sales, SpecId, Sprice, Stock } = Good
            let { GoodsName, CreateTime, Intr } = goodsInfo
            goods = {
              goodsId: GoodsId,
              goodsName: GoodsName,
              intr: Intr,
              createTime: CreateTime,
              id: Id,
              img: Img,
              price: Price,
              sales: Sales,
              specId: SpecId,
              sprice: Sprice,
              stock: Stock
            }
          }
        })
        for (let key in selectSpecDatas) {
          specDatas.forEach(specData => {
            let specName = ''
            if (specData.specId === Number.parseInt(key)) {
              specName += `${specData.specName}:`
              specData.specSub.forEach(specSub => {
                if (specSub.Cid === Number.parseInt(selectSpecDatas[key])) {
                  specName += `${specSub.Name}`
                  spceArray.push(specName)
                }
              })
            }
          })
        }
        return {
          ...goods,
          specName: spceArray.join('|'),
          number
        }
      }
      return null
    }
  },
  mutations: {
    handleLoading (state) {
      state.loading = !state.loading
      state.isLoading = !state.isLoading
    },
    handleNumber (state, newValue) {
      state.number = newValue
    },
    generateUserInfo (state) {
      let userInfo = Common.generateSessionStorageUserInfo()
      state.userInfo = userInfo
    },
    generateUserInfoCheck (state) {
      let userInfo = Common.generateSessionStorageUserInfo()
      if (!userInfo) {
        Common.handleRedirectPage('login')
      }
      state.userInfo = userInfo
    },
    generateGoodsSpecMutation (state, instance) {
      let {goodsinfo, priceList, specDatas} = instance
      state.goodsInfo = goodsinfo
      state.priceList = priceList
      state.specDatas = specDatas
      let selectSpecDatas = {}
      specDatas.forEach(specData => {
        selectSpecDatas[specData.specId] = specData.specSub[0].Cid
      })
      state.selectSpecDatas = selectSpecDatas
    }
  },
  actions: {
    generateGoodsSpecAction ({ commit, state }, goodsId) {
      commit('handleLoading')
      Goods.GetGoodsSpec({goodsId}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          commit('generateGoodsSpecMutation', res)
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    async handleCartAddAction ({ commit, state, dispatch }, instance) {
      commit('generateUserInfoCheck')
      commit('handleLoading')
      let userId = state.userInfo.UserId
      let { goodsId, specId, specName, number } = instance
      Cart.AddShopCart({userId, goodsId, specId, specName, number}).then(res => {
        commit('handleLoading')
        if (res.ret === 1001) {
          Common.handleRedirectPage('cart')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
})

export default store
