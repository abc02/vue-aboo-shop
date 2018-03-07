<script>
export default {
  name: 'AddressBase',
  // computed: {
  //   addressArray () {
  //     if (this.addressLists && this.addressLists.length > 0) {
  //       let arr = []
  //       this.addressLists.slice(0).forEach(address => {
  //         let {UserId, Id, IsDefault, NickName, Phone, Detail} = address
  //         let AddressLonger = `${address.Province}${address.City}${address.Area}${address.Detail}`
  //         let ProvinceCityArea = [address.Province, address.City, address.Area]
  //         // Number to Boolean
  //         // IsDefault === 1 ? IsDefault = true : IsDefault = false
  //         arr.push({ UserId, Id, IsDefault, NickName, Phone, Detail, ProvinceCityArea, AddressLonger })
  //       })
  //       return arr
  //     }
  //     return []
  //   },
  //   total () {
  //     if (this.cartLists && this.cartLists.length) {
  //       let total = 0
  //       this.cartLists.forEach(cartItem => {
  //         total += (Number.parseFloat(cartItem.price) * Number.parseInt(cartItem.number))
  //       })
  //       return `￥${Number.parseFloat(total).toFixed(2)}`
  //     }
  //     return null
  //   }
  // },
  methods: {
    handleClickAddressStatus (status, formData) {
      console.log(status)
      this.$emit('on-handle-click-address-status', status, formData)
    },
    handleClickAddressAdd (formData) {
      this.$emit('on-handle-click-address-add', formData)
    },
    handleClickAddressDelete (index, formData) {
      this.$emit('on-handle-click-address-delete', formData)
    },
    handleClickAddressUpdate (formData) {
      this.$emit('on-handle-click-address-update', formData)
    },
    handleClickAddressSwitchDefault (formData) {
      this.$emit('on-handle-click-address-switch-default', formData)
    },
    generateGetAddressLists () {
      this.$emit('on-generate-get-addresss-lists')
    }
  }
}
</script>
