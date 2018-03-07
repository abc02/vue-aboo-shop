// 服务层组件
import ShopServices from 'modules/service/ShopServices'
export default {
  data: {
    addressLists: null,
    addressUpdate: null,
    addressFormData: null,
    addressStatus: 1 // 1 地址列表 2 添加表单 3 编辑表单 4 移动端列表
  },
  computed: {
    mailAddress () {
      if (this.addressLists && this.addressLists.length) {
        let currentAddress
        this.addressLists.slice(0).forEach(address => {
          if (address.IsDefault === 1) {
            currentAddress = address
          }
        })
        return currentAddress
      }
      return null
    }
  },
  methods: {
    handleClickAddressStatus (status, address) {
      if (status === '3') { this.addressUpdate = address }
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
    handleClickAddressAdd (formData) {
      console.log(formData)
      if (!this.handleCheckFormData(formData)) return
      let ModifyFormData = this.handleModifyFormData('add', formData)
      this.handleLoading()
      ShopServices.AddAddress(ModifyFormData).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.$message.success(res.code)
          this.handleClickAddressStatus(1)
          this.$nextTick(() => {
            this.generateGetAddressLists()
          })
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
        }
      })
    },
    handleClickAddressUpdate (formData) {
      if (!this.handleCheckFormData(formData)) return
      let ModifyFormData = this.handleModifyFormData('update', formData)
      this.handleLoading()
      ShopServices.UpdateAddress(ModifyFormData).then(res => {
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
    handleClickAddressUpdateDefault (formData) {
      let userId = this.userInfo.UserId
      let addressId = formData.Id
      this.handleLoading()
      ShopServices.UpdateAddressDefault({userId, addressId}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.$message.success(res.code)
        }
        if (res.ret === 1002) {
          this.$message.error(res.code)
        }
      })
    },
    handleClickAddressSwitchDefault (formData) {
      this.addressLists.map(address => {
        if (address.Id === formData.Id) {
          address.IsDefault = 1
        } else {
          address.IsDefault = 0
        }
      })
    },
    handleClickAddressDelete (formData) {
      this.$confirm('此操作将删除该收货地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ModifyFormData = this.handleModifyFormData('delete', formData)
        this.handleLoading()
        ShopServices.DeleteAddress(ModifyFormData).then(res => {
          this.handleLoading()
          if (res.ret === 1001) {
            this.$message.success(res.code)
            let timer = setTimeout(() => {
              this.handleGetAddressLists()
              clearTimeout(timer)
            }, 800)
          }
        })
      }).catch(d => d)
    },
    generateGetAddressLists () {
      this.generateCheckUserInfo()
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopServices.GetAddressList({userId}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.addressLists = res.data
        }
        if (res.ret === 1002) {
          this.addressLists = null
          this.handleClickAddressStatus(2)
        }
      })
    }
  }
}
