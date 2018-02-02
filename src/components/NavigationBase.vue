<script>
import LayoutBase from './LayoutBase'
export default {
  name: 'NavigationBase',
  extends: LayoutBase,
  methods: {
    handClickRedirectPage (page, param = null) {
      if (!param) return (location.href = `${page}.html`)
      let paramArray = []
      let paramString = '?'
      for (let key in param) {
        paramArray.push(`${key}=${param[key]}`)
      }
      paramString += paramArray.join('&')
      location.href = `${page}.html${paramString}`
    }
  }
}
</script>
