<template>
   <div>
    <Swiper :slotNames="2" swiperHeight="180px" />
    <el-row type="flex">
      <el-col :span="24" >
        <ProductsLists />
      </el-col>
    </el-row>
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
