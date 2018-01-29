// 收货地址组件
import AddressList from 'components/AddressList'
import AddressAdd from 'components/AddressAdd'
import AddressUpdate from 'components/AddressUpdate'
// 服务层组件
import ShopServices from 'modules/service/ShopServices'
export default {
  data: {
    addressLists: null,
    addressUpdate: null,
    addressStatus: 1 // 1 地址列表 2 添加表单 // 编辑表单
  },
  components: {
    'address-list': AddressList,
    'address-add': AddressAdd,
    'address-update': AddressUpdate
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
      if (!this.handleCheckFormData(formData)) return
      let ModifyFormData = this.handleModifyFormData('add', formData)
      this.handleLoading()
      ShopServices.AddAddress(ModifyFormData).then(res => {
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
    handleGetAddressLists () {
      let userId = this.userInfo.UserId
      this.handleLoading()
      ShopServices.GetAddressList({userId}).then(res => {
        this.handleLoading()
        if (res.ret === 1001) {
          this.addressLists = res.data
        }
        if (res.ret === 1002) {
          this.addressLists = null
        }
      })
    }
  }
}
