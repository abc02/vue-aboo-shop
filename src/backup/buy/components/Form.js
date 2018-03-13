import pca from 'modules/service/pca.json'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Form',
  props: ['type', 'isFirst', 'instance'],
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
      // type: this.$route.query.type,
      // instance: this.$route.query.instance,
      addressData: pca,
      cityLists: null,
      areaLists: null,
      isInit: false
    }
  },
  created () {
    // let query = this.$route.query
    // this.type = query.type
    // this.instance = query.instance
    if (this.type === 'edit' && !this.instance) {
      this.$router.push({
        name: 'address'
      })
    }
    if (this.type === 'edit' && this.instance) {
      let ad = this.instance
      this.province = ad.province
      this.detail = ad.detail
      this.nickName = ad.nickName
      this.phone = ad.phone
      this.isDefault = ad.isDefault
      this.addressId = ad.addressId
      this.userId = ad.userId
      this.isInit = true
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate', to, from)
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(this)
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
        let { isFirst } = this
        this.handleAddressAddAction({...instance, isFirst})
      }
    }
  },
  computed: {
    ...mapState(['isLoading', 'loading', 'addressLists'])
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
