import Vue from 'vue'
import Base from 'mixins/Base'
import VueSessionStorage from 'vue-sessionstorage'
import qs from 'qs'
import AddressList from 'components/AddressList'
import AddAddress from 'components/AddAddress'
Vue.use(VueSessionStorage)
window.vm = new Vue({
  el: '#app',
  mixins: [Base],
  data: {
    profileIndex: '1',
    profileText: '我的账号',
    userInfo: null,
    addressStatus: '1' // 1 地址列表 2 地址表单
  },
  components: {
    'address-list': AddressList,
    'add-address': AddAddress
  },
  methods: {
    handleSelect (index, indexPath, e) {
      this.profileIndex = index
      this.profileText = e.$el.innerText
    },
    handleClickAddAddress (status) {
      this.addressStatus = status
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
