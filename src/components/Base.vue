<script>
import qs from 'qs'
export default {
  name: 'Base',
  methods: {
    handleClickRedirectPage (page, param = null) {
      if (!param) return (location.href = `${page}.html`)
      let paramArray = []
      let paramString = '?'
      for (let key in param) {
        paramArray.push(`${key}=${param[key]}`)
      }
      paramString += paramArray.join('&')
      location.href = `${page}.html${paramString}`
    },
    generateUserInfo () {
      let isUserInfo = this.$session.exists('userInfo')
      if (!isUserInfo) return null
      let userInfoString = this.$session.get('userInfo')
      return qs.parse(userInfoString)
    },
    generateCheckUserInfo () {
      let isUserInfo = this.$session.exists('userInfo')
      if (!isUserInfo) {
        location.href = 'login.html'
      }
      let userInfoString = this.$session.get('userInfo')
      this.userInfo = qs.parse(userInfoString)
    }
  }
}
</script>
