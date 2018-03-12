<template>
  <el-container direction="vertical">
    <Swiper :slotNames='4' swiperHeight="40vh" />
    <el-row type="flex" justify="center" align="top" class="mt20">
      <el-col :xs="22" :sm="20" :md="20" :lg="20" :xl="20">
        <ProductsLists />
      </el-col>
    </el-row>
  </el-container>
</template>
<script>
import Swiper from 'components/Swiper.vue'
import ProductsLists from './ProductsLists.vue'
export default {
  name: 'Store',
  components: {
    Swiper,
    ProductsLists
  }
}
</script>
