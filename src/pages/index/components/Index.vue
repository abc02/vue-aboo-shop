<template>
  <el-container>
      <el-header>
        <NavigationBar active-index="1" />
      </el-header>
      <el-main class="padding-0">
        <Swiper />
        <ProductIntroduction />
      </el-main>
      <el-footer height="20vh" :style="footStyle">
        <Foot />
      </el-footer>
    </el-container>
</template>
<script>
import NavigationBar from 'components/NavigationBar'
import Foot from 'components/Foot'
import Swiper from 'components/Swiper'
import ProductIntroduction from 'components/ProductIntroduction'
export default {
  name: 'Index',
  components: {
    NavigationBar,
    Swiper,
    ProductIntroduction,
    Foot
  },
  data () {
    return {
      footStyle: {
        backgroundColor: '#f6655e',
        color: '#ffffff'
      }
    }
  }
}
</script>
