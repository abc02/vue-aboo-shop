// import Common from 'modules/service/CommonServices.js'
import Address from 'modules/service/AddressServices.js'
import router from 'router/index.js'
const address = {
  namespaced: true,
  state: {
    addressLists: null,
    addressListsTmp: null,
    addressDefault: null
  },
  getters: {
    defaultAddress: state => {
      let { addressLists } = state
      if (addressLists && addressLists.length) {
        let xx = addressLists.slice(0).filter(address => address.isDefault)
        console.log(xx[0])
        return (xx[0])
      }
      return null
    }
  },
  mutations: {
    generateAddressListsMutation (state, instance) {
      let modifyAddressLists = instance => {
        let arr = []
        instance.slice(0).forEach(address => {
          let { Area, City, Detail, Id, UserId, IsDefault, NickName, Phone, Province } = address
          arr.push({
            area: Area,
            city: City,
            detail: Detail,
            addressId: Id,
            userId: UserId,
            isDefault: IsDefault,
            nickName: NickName,
            phone: Phone,
            province: Province,
            provinceCityArea: [Province, City, Area],
            addressLonger: `${address.Province}${address.City}${address.Area}${address.Detail}`
          })
        })
        return arr
      }
      if (instance.ret === 1001) {
        let addressLists = modifyAddressLists(instance.data)
        state.addressLists = addressLists
        state.addressListsTmp = addressLists
      }
      if (instance.ret === 1002) state.addressLists = null
    },
    generateAddressDefaultMutation (state, instance) {
      let modifyAddressDefault = instance => {
        let { Area, City, Detail, Id, UserId, IsDefault, NickName, Phone, Province } = instance
        return {
          area: Area,
          city: City,
          detail: Detail,
          addressId: Id,
          userId: UserId,
          isDefault: IsDefault,
          nickName: NickName,
          phone: Phone,
          province: Province,
          provinceCityArea: [Province, City, Area],
          addressLonger: `${Province}${City}${Area}${Detail}`
        }
      }
      if (instance.ret === 1001) state.addressDefault = modifyAddressDefault(instance.data)
      if (instance.ret === 1002) {
        state.addressDefault = null
        let isMobile = /Mobile/i.test(navigator.userAgent)
        if (isMobile) {
          router.push({ name: 'address', params: { isFirst: true } })
        }
      }
    },
    handleAddressAddMutation (state, instance) {
      // let modifyAddressLists = instance => {
      //   let arr = []
      //   instance.slice(0).forEach(address => {
      //     let { Area, City, Detail, Id, UserId, IsDefault, NickName, Phone, Province } = address
      //     // Number to Boolean
      //     // IsDefault === 1 ? IsDefault = true : IsDefault = false
      //     arr.push({
      //       area: Area,
      //       city: City,
      //       detail: Detail,
      //       addressId: Id,
      //       userId: UserId,
      //       isDefault: IsDefault,
      //       nickName: NickName,
      //       phone: Phone,
      //       province: Province,
      //       provinceCityArea: [address.Province, address.City, address.Area],
      //       addressLonger: `${address.Province}${address.City}${address.Area}${address.Detail}`
      //     })
      //   })
      //   return arr
      // }
      // state.addressLists.push(modifyAddressLists(instance))
    },
    handleAddressUpdateMutation (state, instance) {
      let addressLists = [].concat(state.addressLists)
      let index = addressLists.findIndex(address => {
        return address.addressId === instance.addressId
      })
      addressLists[index] = instance
      state.addressLists = addressLists
    },
    hanleAddressDeleteMuataion (state, addressId) {
      let addressLists = state.addressLists
      let index = addressLists.findIndex(address => {
        return address.addressId === addressId
      })
      addressLists.splice(index, 1)
    },
    handleSetDefaultMutation (state, addressId) {
      let addressLists = state.addressLists
      addressLists.forEach(address => {
        address.isDefault = address.addressId === addressId ? 1 : 0
      })
    },
    handleSelectAddressMutation (state, addressId) {
      state.addressListsTmp.forEach(address => {
        if (address.addressId === addressId) return (address.isDefault = 1)
        address.isDefault = 0
      })
    }
  },
  actions: {
    async generateAddressListsAction ({ dispatch, commit, rootState }) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      commit('generateAddressListsMutation', await Address.GetAddressList({userId}, true))
      commit('handleLoading', null, { root: true })
    },
    async generateAddressDefaultAction ({ dispatch, commit, rootState }) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      commit('generateAddressDefaultMutation', await Address.GetDefaulAddress({userId}, true))
      commit('handleLoading', null, { root: true })
    },
    async handleAddressAddAction ({ dispatch, commit, rootState }, instance) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      let { nickName, phone, province, city, area, detail } = instance
      let res = await Address.AddAddress({nickName, phone, province, city, area, detail, userId}, true)
      commit('handleLoading', null, { root: true })
      if (res.ret === 1001) dispatch('generateAddressListsAction')
      if (res.ret === 1002) window.confirm(res.code)
    },
    async handleAddressUpdateAction ({ dispatch, commit, rootState }, instance) {
      commit('handleUserInfoCheckMutation', null, { root: true })
      commit('handleLoading', null, { root: true })
      let res = await Address.UpdateAddress({...instance}, true)
      commit('handleLoading', null, { root: true })
      if (res.ret === 1001) dispatch('generateAddressListsAction')
      if (res.ret === 1002) window.confirm(res.code)
    },
    handleAddressDeleteAction ({ dispatch, commit, rootState }, addressId) {
      if (!window.confirm('此操作将删除该收货地址, 是否继续?')) return
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      Address.DeleteAddress({addressId, userId}, true).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          dispatch('generateAddressListsAction')
          // Router.push({ name: 'all' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressSetDefaultAction ({ dispatch, commit, rootState }, addressId) {
      // 判断是已登录
      commit('handleUserInfoCheckMutation', null, { root: true })
      if (!rootState.userInfo) return
      let { userId } = rootState.userInfo
      commit('handleLoading', null, { root: true })
      Address.UpdateAddressDefault({userId, addressId}, true).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          dispatch('generateAddressListsAction')
        }
        if (res.ret === 1002) {
          // window.confirm(res.code)
        }
      })
    }
  }
}

export default address
