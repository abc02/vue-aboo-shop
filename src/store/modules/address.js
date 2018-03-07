// import Common from 'modules/service/CommonServices.js'
import Address from 'modules/service/AddressServices.js'

const address = {
  namespaced: true,
  state: {
    addressLists: null
  },
  getters: {
    defaultAddress: state => {
      let { addressLists } = state
      if (addressLists && addressLists.length) {
        return (addressLists.slice(0).filter(address => address.isDefault))[0]
      }
      return null
    }
    // modifyAddressLists: state => {
    //   let { addressLists } = state
    //   if (addressLists && addressLists.length > 0) {
    //     let arr = []
    //     addressLists.slice(0).forEach(address => {
    //       let { Area, City, Detail, Id, UserId, IsDefault, NickName, Phone, Province } = address
    //       // Number to Boolean
    //       // IsDefault === 1 ? IsDefault = true : IsDefault = false
    //       arr.push({
    //         area: Area,
    //         city: City,
    //         detail: Detail,
    //         addressId: Id,
    //         userId: UserId,
    //         isDefault: IsDefault,
    //         nickName: NickName,
    //         phone: Phone,
    //         province: Province,
    //         provinceCityArea: [address.Province, address.City, address.Area],
    //         addressLonger: `${address.Province}${address.City}${address.Area}${address.Detail}`
    //       })
    //     })
    //     return arr
    //   }
    //   return []
    // }
  },
  mutations: {
    generateAddressListsMutation (state, addressLists) {
      let arr = []
      addressLists.slice(0).forEach(address => {
        let { Area, City, Detail, Id, IsDefault, NickName, Phone, Province, UserId } = address
        arr.push({
          area: Area,
          city: City,
          detail: Detail,
          addressId: Id,
          isDefault: IsDefault,
          nickName: NickName,
          phone: Phone,
          province: Province,
          userId: UserId,
          provinceCityArea: [address.Province, address.City, address.Area],
          addressLonger: `${address.Province}${address.City}${address.Area}${address.Detail}`
        })
      })
      state.addressLists = arr
    },
    handleAddressAddMutation (state, instance) {
      let modifyAddressLists = instance => {
        let arr = []
        instance.slice(0).forEach(address => {
          let { Area, City, Detail, Id, UserId, IsDefault, NickName, Phone, Province } = address
          // Number to Boolean
          // IsDefault === 1 ? IsDefault = true : IsDefault = false
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
            provinceCityArea: [address.Province, address.City, address.Area],
            addressLonger: `${address.Province}${address.City}${address.Area}${address.Detail}`
          })
        })
        return arr
      }
      state.addressLists.push(modifyAddressLists(instance))
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
    }
  },
  actions: {
    generateAddressListsAction ({ dispatch, commit, rootState }) {
      commit('generateUserInfoCheck', null, { root: true })
      let userId = rootState.userInfo.UserId
      commit('handleLoading', null, { root: true })
      Address.GetAddressList({userId}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('generateAddressListsMutation', res.data)
        }
        if (res.ret === 1002) {
          // window.confirm(res.code)
          // Router.push({ name: 'form', params: { type: 'add', isFirst: true } })
        }
      })
    },
    handleAddressAddAction ({ dispatch, commit, rootState }, instance) {
      commit('generateUserInfoCheck', null, { root: true })
      let userId = rootState.userInfo.UserId
      commit('handleLoading', null, { root: true })
      let { nickName, phone, province, city, area, detail, isFirst } = instance
      Address.AddAddress({nickName, phone, province, city, area, detail, userId}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          // commit('handleAddressAddMutation', instance)
          window.confirm(res.code)
          console.log(isFirst)
          // if (isFirst) {
          //   Router.push({ name: 'summary' })
          // } else {
          //   Router.push({ name: 'all' })
          // }
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressUpdateAction ({ dispatch, commit, rootState }, instance) {
      commit('generateUserInfoCheck')
      commit('handleLoading', null, { root: true })
      Address.UpdateAddress({...instance}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          commit('handleAddressUpdateMutation', instance)
          window.confirm(res.code)
          // Router.push({ name: 'all' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressDeleteAction ({ dispatch, commit, rootState }, addressId) {
      if (!window.confirm('此操作将删除该收货地址, 是否继续?')) return
      commit('generateUserInfoCheck', null, { root: true })
      let userId = rootState.userInfo.UserId
      commit('handleLoading', null, { root: true })
      Address.DeleteAddress({addressId, userId}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          dispatch('generateAddressListsAction')
          window.confirm(res.code)
          // Router.push({ name: 'all' })
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    },
    handleAddressSetDefaultAction ({ dispatch, commit, rootState }, addressId) {
      commit('generateUserInfoCheck', null, { root: true })
      let userId = rootState.userInfo.UserId
      commit('handleLoading', null, { root: true })
      Address.UpdateAddressDefault({userId, addressId}).then(res => {
        commit('handleLoading', null, { root: true })
        if (res.ret === 1001) {
          dispatch('generateAddressListsAction')
        }
        if (res.ret === 1002) {
          window.confirm(res.code)
        }
      })
    }
  }
}

export default address
