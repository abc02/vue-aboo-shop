<template>
  <div>
    <Swiper :slotNames="4" swiperHeight="480px" class="mb20"/>
    <el-row type="flex" justify="center" class="mb20">
      <el-col :span="20">
        <ProductsLists />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from 'components/Swiper.vue'
import ProductsLists from 'components/pc/ProductsLists.vue'
export default {
  name: 'Index',
  components: {
    Swiper,
    ProductsLists
  }
}
</script>
