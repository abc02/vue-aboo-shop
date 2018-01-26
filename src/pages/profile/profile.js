import Vue from 'vue'
import Base from 'mixins/Base'
import VueSessionStorage from 'vue-sessionstorage'
import qs from 'qs'
// 收货地址组件
import AddressList from 'components/AddressList'
import AddAddress from 'components/AddAddress'
import UpdateAddress from 'components/UpdateAddress'

import ShopService from 'modules/service/ShopServices'
Vue.use(VueSessionStorage)
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  data: {
    profileIndex: '1',
    profileText: '我的账号',
    userInfo: null,
    addressLists: null,
    updateAddress: null,
    addressStatus: 1, // 1 地址列表 2 添加表单 // 编辑表单
    loading: false
  },
  components: {
    'address-list': AddressList,
    'add-address': AddAddress,
    'update-address': UpdateAddress
  },
  methods: {
    handleLoading () {
      this.loading = !this.loading
    },
    handleSelect (index, indexPath, e) {
      this.profileIndex = index
      this.profileText = e.$el.innerText
    },
    handleClickAddressStatus (status, address) {
      if (status === '3') { this.updateAddress = address }
      this.addressStatus = status
    },
    handleCheckFormData (formData) {
      console.log(formData)
      if (!formData.NickName) return this.$message.error('收件人姓名不能为空')
      if (!formData.ProvinceCityArea.length) return this.$message.error('省/市区/不能为空')
      if (!formData.Detail) return this.$message.error('详情地址不能为空')
      if (!formData.Phone) return this.$message.error('联系电话不能为空')
      return true
    },
    handleModifyFormData (type, formData) {
      let { NickName, Detail, Phone, isDefault, ProvinceCityArea } = formData
      let province = ProvinceCityArea[0]
      let city = ProvinceCityArea[1]
      let area = ProvinceCityArea[2]
      if (type === 'add') {
        return {
          userId: this.userInfo.UserId,
          province,
          city,
          area,
          detail: Detail,
          phone: Phone,
          nickName: NickName,
          isDefault: isDefault ? '1' : '0' // Boolean to String
        }
      }
      if (type === 'update') {
        return {
          userId: formData.UserId,
          addressId: formData.Id,
          province,
          city,
          area,
          detail: Detail,
          phone: Phone,
          nickName: NickName
        }
      }
      if (type === 'delete') {
        return {
          userId: formData.UserId,
          addressId: formData.Id
        }
      }
    },
    handleClickAddAddress (formData) {
      if (!this.handleCheckFormData(formData)) return
      let ModifyFormData = this.handleModifyFormData('add', formData)
      this.handleLoading()
      ShopService.AddAddress(ModifyFormData).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.$message.success(res.code)
          let timer = setTimeout(() => {
            this.addressStatus = 1
            clearTimeout(timer)
          }, 800)
        }
      })
    },
    handleClickUpdateAddress (formData) {
      if (!this.handleCheckFormData(formData)) return
      let ModifyFormData = this.handleModifyFormData('update', formData)
      this.handleLoading()
      ShopService.UpdateAddress(ModifyFormData).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.$message.success(res.code)
          let timer = setTimeout(() => {
            this.addressStatus = 1
            clearTimeout(timer)
          }, 800)
        }
      })
    },
    handleClickDeleteAddress (formData) {
      this.$confirm('此操作将删除该收货地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ModifyFormData = this.handleModifyFormData('delete', formData)
        this.handleLoading()
        ShopService.DeleteAddress(ModifyFormData).then(res => {
          this.handleLoading()
          if (res.ret === 1001) {
            this.$message.success(res.code)
            let timer = setTimeout(() => {
              this.handleGetAddressList()
              clearTimeout(timer)
            }, 800)
          }
        })
      }).catch(d => d)
    },
    handleGetAddressList () {
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopService.GetAddressList({userId}).then(res => {
        this.handleLoading()
        console.log(res)
        if (res.ret === 1001) {
          this.addressLists = res.data
        }
        if (res.ret === 1002) {
          this.addressLists = null
        }
      })
    }
  },
  created () {
    let isUserInfo = this.$session.exists('userInfo')
    if (!isUserInfo) {
      location.href = 'login.html'
    }
    let userInfoString = this.$session.get('userInfo')
    this.userInfo = qs.parse(userInfoString)
  }
})
