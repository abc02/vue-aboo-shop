<template>
  <el-row type="flex" :gutter="20">
    <el-col :span="6" v-for="(goods, index) in goodsLists" :key="index">
      <router-link :to="{ name: 'product', params: { goodsId: goods.id }}">
        <el-card :body-style="{ padding: '10px' }" style="height: 30vh">
          <div style="height: 16vh"  class="mb20  text-center">
            <img :src="goods.img" :alt="goods.goodsName" style="width:auto;">
          </div>
          <h1 class="mb10 h1">{{goods.goodsName}}</h1>
          <p class="ellipsis">{{goods.intr}}</p>
        </el-card>
        </router-link>
    </el-col>
  </el-row>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('products')
export default {
  name: 'ProductsLists',
  computed: {
    ...mapState(['limit', 'goodsLists'])
  },
  methods: {
    ...mapMutations(['handleLimit', 'handleGoodsListsClearMutation']),
    ...mapActions(['generateGoodsListsAction'])
  },
  activated  () {
    this.generateGoodsListsAction(this.limit)
  },
  deactivated () {
    this.handleLimit(0)
    this.handleGoodsListsClearMutation()
  }
}
</script>
