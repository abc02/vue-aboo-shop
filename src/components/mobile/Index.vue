<template>
  <div>
    <Swiper :slotNames="2" swiperHeight="180px" />
    <ProductsLists />
  </div>
</template>
<script>
import Swiper from 'components/Swiper.vue'
import ProductsLists from 'components/mobile/ProductsLists.vue'
export default {
  name: 'Index',
  components: {
    Swiper,
    ProductsLists
  }
}
</script>
