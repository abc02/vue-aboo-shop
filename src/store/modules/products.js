import Common from 'modules/service/CommonServices.js'
import Goods from 'modules/service/GoodsServices.js'
import Store from 'pages/store/router/index.js'
const products = {
  namespaced: true,
  state: {
    goodsLists: null,
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
    handleNumber (state, newValue) {
      state.number = newValue
    },
    handleSpecDatasMutation (state, instance) {
      let { key, value } = instance
      state.selectSpecDatas[key] = value
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
    },
    generateGoodsListsMutation (state, instance) {
      let modifyGoodsLists = instance => {
        let arr = []
        instance.slice(0).forEach(goods => {
          let { Id, Sales, GoodsName, Intr, CreateTime, Img } = goods
          arr.push({
            id: Id,
            sales: Sales,
            goodsName: GoodsName,
            intr: Intr,
            createTime: Common.handleCreateTimeText(CreateTime),
            img: Img
          })
        })
        return arr
      }
      if (Array.isArray(instance)) {
        state.goodsLists = modifyGoodsLists(instance)
      } else {
        state.goodsLists = instance
      }
    }
  },
  actions: {
    generateGoodsListsAction ({ dispatch, commit }, limit) {
      commit('handleLoading', null, { root: true })
      Goods.GetGoodsList({limit}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('generateGoodsListsMutation', res.data)
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    generateGoodsSpecAction ({ dispatch, commit }, goodsId) {
      commit('handleLoading', null, { root: true })
      Goods.GetGoodsSpec({goodsId}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('generateGoodsSpecMutation', res)
        }
        if (res.ret === 1002) {
          Store.push({ name: 'store' })
        }
      })
    }
  }
}

export default products
