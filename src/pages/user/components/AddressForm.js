import pca from 'modules/service/pca.json'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AddressForm',
  props: ['type', 'instance'],
  data () {
    return {
      nickName: '',
      phone: '',
      province: '',
      city: '',
      area: '',
      detail: '',
      isDefault: false,
      addressId: '',
      userId: '',
      addressData: pca,
      cityLists: null,
      areaLists: null,
      isInit: false
    }
  },
  created () {
    if (this.type === 'edit' && !this.instance) {
      this.$router.push({
        name: 'address'
      })
    }
    if (this.type === 'edit' && this.instance) {
      let { nickName, phone, province, detail, isDefault, addressId, userId } = this.instance
      this.nickName = nickName
      this.phone = phone
      this.province = province
      this.detail = detail
      this.isDefault = isDefault
      this.addressId = addressId
      this.userId = userId
      this.isInit = true
    }
  },
  methods: {
    ...mapActions(['handleAddressDeleteAction', 'handleAddressSetDefaultAction', 'handleAddressUpdateAction', 'handleAddressAddAction']),
    handleAddress () {
      // 合法校验&非空字符串
      let { nickName, phone, province, city, area, detail } = this
      let instance = { nickName, phone, province, city, area, detail }
      if (this.type === 'edit') {
        let { addressId, userId, isDefault } = this
        this.handleAddressUpdateAction({ ...instance, addressId, userId, isDefault })
      } else {
        this.handleAddressAddAction(instance)
      }
    }
  },
  computed: {
    ...mapState(['isLoading', 'addressLists'])
  },
  watch: {
    addressLists: {
      handler () {
        this.$router.go(-1)
      },
      deep: true
    },
    province (key) {
      if (!key) return
      let list = this.addressData
      // 选择省级 -> 联动市级
      this.cityLists = list[key]
      let cityKeyArray = Object.keys(this.cityLists)
      this.city = cityKeyArray[0]
      if (this.type === 'edit' && this.isInit) {
        this.city = this.instance.city
      }
    },
    city (key) {
      if (!key) return
      let list = this.cityLists
      this.areaLists = list[key]
      // 市级 -> 联动区级
      this.area = this.areaLists[0]
      if (this.type === 'edit' && this.isInit) {
        this.area = this.instance.area
        this.isInit = false
      }
    }
  }
}
