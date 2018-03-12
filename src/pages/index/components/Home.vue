<template>
  <el-container direction="vertical">
    <Swiper :slotNames="slotNames" swiperHeight="70vh">
      <SilderPage01 slot="SilderPage01" />
      <SilderPage02 slot="SilderPage02" />
    </Swiper>
    <ProductsSimple />
  </el-container>
</template>

<script>
import Swiper from 'components/Swiper.vue'
import SilderPage01 from './SilderPage01.vue'
import SilderPage02 from './SilderPage02.vue'
import ProductsSimple from './ProductsSimple.vue'
export default {
  name: 'Home',
  components: {
    Swiper,
    SilderPage01,
    SilderPage02,
    ProductsSimple
  },
  data () {
    return {
      slotNames: ['SilderPage01', 'SilderPage02']
    }
  }
}
</script>
